'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _BrowserRouter2 = require('react-router-dom/BrowserRouter');

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
    "use strict";

    if (!Function.prototype.$asyncbind) {
        Object.defineProperty(Function.prototype, "$asyncbind", {
            value: $asyncbind,
            enumerable: false,
            configurable: true,
            writable: true
        });
    }

    if (!$asyncbind.trampoline) {
        $asyncbind.trampoline = function trampoline(t, x, s, e, u) {
            return function b(q) {
                while (q) {
                    if (q.then) {
                        q = q.then(b, e);
                        return u ? undefined : q;
                    }

                    try {
                        if (q.pop) {
                            if (q.length) return q.pop() ? x.call(t) : q;
                            q = s;
                        } else q = q.call(t);
                    } catch (r) {
                        return e(r);
                    }
                }
            };
        };
    }

    if (!$asyncbind.LazyThenable) {
        $asyncbind.LazyThenable = function () {
            function isThenable(obj) {
                return obj && obj instanceof Object && typeof obj.then === "function";
            }

            function resolution(p, r, how) {
                try {
                    var x = how ? how(r) : r;
                    if (p === x) return p.reject(new TypeError("Promise resolution loop"));

                    if (isThenable(x)) {
                        x.then(function (y) {
                            resolution(p, y);
                        }, function (e) {
                            p.reject(e);
                        });
                    } else {
                        p.resolve(x);
                    }
                } catch (ex) {
                    p.reject(ex);
                }
            }

            function _unchained(v) {}

            function thenChain(res, rej) {
                this.resolve = res;
                this.reject = rej;
            }

            function Chained() {}

            ;
            Chained.prototype = {
                resolve: _unchained,
                reject: _unchained,
                then: thenChain
            };

            function then(res, rej) {
                var chain = new Chained();

                try {
                    this._resolver(function (value) {
                        return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
                    }, function (ex) {
                        resolution(chain, ex, rej);
                    });
                } catch (ex) {
                    resolution(chain, ex, rej);
                }

                return chain;
            }

            function Thenable(resolver) {
                this._resolver = resolver;
                this.then = then;
            }

            ;

            Thenable.resolve = function (v) {
                return Thenable.isThenable(v) ? v : {
                    then: function then(resolve) {
                        return resolve(v);
                    }
                };
            };

            Thenable.isThenable = isThenable;
            return Thenable;
        }();

        $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
            tick = tick || (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
                setTimeout(f, 0);
            };

            var soon = function () {
                var fq = [],
                    fqStart = 0,
                    bufferSize = 1024;

                function callQueue() {
                    while (fq.length - fqStart) {
                        try {
                            fq[fqStart]();
                        } catch (ex) {}

                        fq[fqStart++] = undefined;

                        if (fqStart === bufferSize) {
                            fq.splice(0, bufferSize);
                            fqStart = 0;
                        }
                    }
                }

                return function (fn) {
                    fq.push(fn);
                    if (fq.length - fqStart === 1) tick(callQueue);
                };
            }();

            function Zousan(func) {
                if (func) {
                    var me = this;
                    func(function (arg) {
                        me.resolve(arg);
                    }, function (arg) {
                        me.reject(arg);
                    });
                }
            }

            Zousan.prototype = {
                resolve: function resolve(value) {
                    if (this.state !== undefined) return;
                    if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
                    var me = this;

                    if (value && (typeof value === "function" || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object")) {
                        try {
                            var first = 0;
                            var then = value.then;

                            if (typeof then === "function") {
                                then.call(value, function (ra) {
                                    if (!first++) {
                                        me.resolve(ra);
                                    }
                                }, function (rr) {
                                    if (!first++) {
                                        me.reject(rr);
                                    }
                                });
                                return;
                            }
                        } catch (e) {
                            if (!first) this.reject(e);
                            return;
                        }
                    }

                    this.state = STATE_FULFILLED;
                    this.v = value;
                    if (me.c) soon(function () {
                        for (var n = 0, l = me.c.length; n < l; n++) {
                            STATE_FULFILLED(me.c[n], value);
                        }
                    });
                },
                reject: function reject(reason) {
                    if (this.state !== undefined) return;
                    this.state = STATE_REJECTED;
                    this.v = reason;
                    var clients = this.c;
                    if (clients) soon(function () {
                        for (var n = 0, l = clients.length; n < l; n++) {
                            STATE_REJECTED(clients[n], reason);
                        }
                    });
                },
                then: function then(onF, onR) {
                    var p = new Zousan();
                    var client = {
                        y: onF,
                        n: onR,
                        p: p
                    };

                    if (this.state === undefined) {
                        if (this.c) this.c.push(client);else this.c = [client];
                    } else {
                        var s = this.state,
                            a = this.v;
                        soon(function () {
                            s(client, a);
                        });
                    }

                    return p;
                }
            };

            function STATE_FULFILLED(c, arg) {
                if (typeof c.y === "function") {
                    try {
                        var yret = c.y.call(undefined, arg);
                        c.p.resolve(yret);
                    } catch (err) {
                        c.p.reject(err);
                    }
                } else c.p.resolve(arg);
            }

            function STATE_REJECTED(c, reason) {
                if (typeof c.n === "function") {
                    try {
                        var yret = c.n.call(undefined, reason);
                        c.p.resolve(yret);
                    } catch (err) {
                        c.p.reject(err);
                    }
                } else c.p.reject(reason);
            }

            Zousan.resolve = function (val) {
                if (val && val instanceof Zousan) return val;
                var z = new Zousan();
                z.resolve(val);
                return z;
            };

            Zousan.reject = function (err) {
                if (err && err instanceof Zousan) return err;
                var z = new Zousan();
                z.reject(err);
                return z;
            };

            Zousan.version = "2.3.3-nodent";
            return Zousan;
        })();
    }

    function boundThen() {
        return resolver.apply(self, arguments);
    }

    var resolver = this;

    switch (catcher) {
        case true:
            return new $asyncbind.Thenable(boundThen);

        case 0:
            return new $asyncbind.LazyThenable(boundThen);

        case undefined:
            boundThen.then = boundThen;
            return boundThen;

        default:
            return function () {
                try {
                    return resolver.apply(self, arguments);
                } catch (ex) {
                    return catcher(ex);
                }
            };
    }
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('./middleware/index');

var _AppSync = require('./AppSync.js');

var _AppSync2 = _interopRequireDefault(_AppSync);

var _awsExports = require('./aws-exports');

var _awsExports2 = _interopRequireDefault(_awsExports);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactDom = require('react-dom');

var _reactApollo = require('react-apollo');

var _awsAppsync = require('aws-appsync');

var _awsAppsync2 = _interopRequireDefault(_awsAppsync);

var _apolloCacheInmemory = require('apollo-cache-inmemory');

var _global = require('aws-sdk/global');

var _lib = require('@aws-amplify/storage/lib');

var _lib2 = _interopRequireDefault(_lib);

var _Credentials = require('@aws-amplify/core/lib/Credentials');

var _Credentials2 = _interopRequireDefault(_Credentials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
    "use strict";

    if (!Function.prototype.$asyncbind) {
        Object.defineProperty(Function.prototype, "$asyncbind", {
            value: $asyncbind,
            enumerable: false,
            configurable: true,
            writable: true
        });
    }

    if (!$asyncbind.trampoline) {
        $asyncbind.trampoline = function trampoline(t, x, s, e, u) {
            return function b(q) {
                while (q) {
                    if (q.then) {
                        q = q.then(b, e);
                        return u ? undefined : q;
                    }

                    try {
                        if (q.pop) {
                            if (q.length) return q.pop() ? x.call(t) : q;
                            q = s;
                        } else q = q.call(t);
                    } catch (r) {
                        return e(r);
                    }
                }
            };
        };
    }

    if (!$asyncbind.LazyThenable) {
        $asyncbind.LazyThenable = function () {
            function isThenable(obj) {
                return obj && obj instanceof Object && typeof obj.then === "function";
            }

            function resolution(p, r, how) {
                try {
                    var x = how ? how(r) : r;
                    if (p === x) return p.reject(new TypeError("Promise resolution loop"));

                    if (isThenable(x)) {
                        x.then(function (y) {
                            resolution(p, y);
                        }, function (e) {
                            p.reject(e);
                        });
                    } else {
                        p.resolve(x);
                    }
                } catch (ex) {
                    p.reject(ex);
                }
            }

            function _unchained(v) {}

            function thenChain(res, rej) {
                this.resolve = res;
                this.reject = rej;
            }

            function Chained() {}

            ;
            Chained.prototype = {
                resolve: _unchained,
                reject: _unchained,
                then: thenChain
            };

            function then(res, rej) {
                var chain = new Chained();

                try {
                    this._resolver(function (value) {
                        return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
                    }, function (ex) {
                        resolution(chain, ex, rej);
                    });
                } catch (ex) {
                    resolution(chain, ex, rej);
                }

                return chain;
            }

            function Thenable(resolver) {
                this._resolver = resolver;
                this.then = then;
            }

            ;

            Thenable.resolve = function (v) {
                return Thenable.isThenable(v) ? v : {
                    then: function then(resolve) {
                        return resolve(v);
                    }
                };
            };

            Thenable.isThenable = isThenable;
            return Thenable;
        }();

        $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
            tick = tick || (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
                setTimeout(f, 0);
            };

            var soon = function () {
                var fq = [],
                    fqStart = 0,
                    bufferSize = 1024;

                function callQueue() {
                    while (fq.length - fqStart) {
                        try {
                            fq[fqStart]();
                        } catch (ex) {}

                        fq[fqStart++] = undefined;

                        if (fqStart === bufferSize) {
                            fq.splice(0, bufferSize);
                            fqStart = 0;
                        }
                    }
                }

                return function (fn) {
                    fq.push(fn);
                    if (fq.length - fqStart === 1) tick(callQueue);
                };
            }();

            function Zousan(func) {
                if (func) {
                    var me = this;
                    func(function (arg) {
                        me.resolve(arg);
                    }, function (arg) {
                        me.reject(arg);
                    });
                }
            }

            Zousan.prototype = {
                resolve: function resolve(value) {
                    if (this.state !== undefined) return;
                    if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
                    var me = this;

                    if (value && (typeof value === "function" || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object")) {
                        try {
                            var first = 0;
                            var then = value.then;

                            if (typeof then === "function") {
                                then.call(value, function (ra) {
                                    if (!first++) {
                                        me.resolve(ra);
                                    }
                                }, function (rr) {
                                    if (!first++) {
                                        me.reject(rr);
                                    }
                                });
                                return;
                            }
                        } catch (e) {
                            if (!first) this.reject(e);
                            return;
                        }
                    }

                    this.state = STATE_FULFILLED;
                    this.v = value;
                    if (me.c) soon(function () {
                        for (var n = 0, l = me.c.length; n < l; n++) {
                            STATE_FULFILLED(me.c[n], value);
                        }
                    });
                },
                reject: function reject(reason) {
                    if (this.state !== undefined) return;
                    this.state = STATE_REJECTED;
                    this.v = reason;
                    var clients = this.c;
                    if (clients) soon(function () {
                        for (var n = 0, l = clients.length; n < l; n++) {
                            STATE_REJECTED(clients[n], reason);
                        }
                    });
                },
                then: function then(onF, onR) {
                    var p = new Zousan();
                    var client = {
                        y: onF,
                        n: onR,
                        p: p
                    };

                    if (this.state === undefined) {
                        if (this.c) this.c.push(client);else this.c = [client];
                    } else {
                        var s = this.state,
                            a = this.v;
                        soon(function () {
                            s(client, a);
                        });
                    }

                    return p;
                }
            };

            function STATE_FULFILLED(c, arg) {
                if (typeof c.y === "function") {
                    try {
                        var yret = c.y.call(undefined, arg);
                        c.p.resolve(yret);
                    } catch (err) {
                        c.p.reject(err);
                    }
                } else c.p.resolve(arg);
            }

            function STATE_REJECTED(c, reason) {
                if (typeof c.n === "function") {
                    try {
                        var yret = c.n.call(undefined, reason);
                        c.p.resolve(yret);
                    } catch (err) {
                        c.p.reject(err);
                    }
                } else c.p.reject(reason);
            }

            Zousan.resolve = function (val) {
                if (val && val instanceof Zousan) return val;
                var z = new Zousan();
                z.resolve(val);
                return z;
            };

            Zousan.reject = function (err) {
                if (err && err instanceof Zousan) return err;
                var z = new Zousan();
                z.reject(err);
                return z;
            };

            Zousan.version = "2.3.3-nodent";
            return Zousan;
        })();
    }

    function boundThen() {
        return resolver.apply(self, arguments);
    }

    var resolver = this;

    switch (catcher) {
        case true:
            return new $asyncbind.Thenable(boundThen);

        case 0:
            return new $asyncbind.LazyThenable(boundThen);

        case undefined:
            boundThen.then = boundThen;
            return boundThen;

        default:
            return function () {
                try {
                    return resolver.apply(self, arguments);
                } catch (ex) {
                    return catcher(ex);
                }
            };
    }
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// import Amplify, {Auth} from 'aws-amplify'
//includes @aws-amplify/core but only uses core.credentials and core.AWS.config


//imports facet which imports aws-sdk but only uses config/credentials/CognitoIdentityCredentials

// var AWS = require('aws-sdk')

!_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var creds, client, middleware, _ref2, logger, store, WithProvider;

    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:

                    // const { default: Loadable } = await import(/* webpackChunkName: "loadable" */ 'react-loadable')
                    // const { BrowserRouter } = await import(/* webpackChunkName: "react-router-dom" */ 'react-router-dom')
                    // const { hydrate } = await import(/* webpackChunkName: "react-dom" */ 'react-dom')
                    // const { ApolloProvider } = await import(/* webpackChunkName: "react-apollo" */ 'react-apollo')
                    // const { default: Amplify } = await import(/* webpackChunkName: "amplify" */ 'aws-amplify')
                    // const { default: Auth } = await import(/* webpackChunkName: "auth" */ '@aws-amplify/auth/lib')
                    // const { default: AWSApstoragelient } = await import(/* webpackChunkName: "aws-appsync-react" */ 'aws-appsync')
                    // const { InMemoryCache } = await import(/* webpackChunkName: "apollo-cache-inmemory" */ 'apollo-cache-inmemory')

                    // Amplify.configure(awsmobile) 

                    creds = {
                        identityPoolId: "us-east-2:75c318fc-8d9b-4659-8a64-9c245b1317aa",
                        mandatorySignIn: false,
                        refreshHandlers: undefined,
                        region: "us-east-2",
                        userPoolId: "us-east-2_8qMRGnVK5"
                    };


                    _global.config.update({
                        region: 'us-east-2',
                        credentials: new _global.CognitoIdentityCredentials({
                            IdentityPoolId: 'us-east-2:75c318fc-8d9b-4659-8a64-9c245b1317aa'
                        })
                    });

                    _Credentials2.default.configure(creds);
                    _lib2.default.configure(_awsExports2.default);

                    // THIS TEST SHOWS THAT DIRECT ACCESS TO DYNAMO DB IS MUCH FASTER ABOUT 4-7 TIMES AS FAST SO NEED TO USE THIS FOR POST PAGE LOAD!
                    // var ddb = new AWS.DynamoDB.DocumentClient()

                    // var params = {
                    //     TableName: 'delete-soon',
                    //     Key: {
                    //         'id' : '1'
                    //     },
                    //     AttributesToGet: ['username']
                    // }

                    // // Call DynamoDB to read the item from the table
                    // ddb.get(params, function(err, data) {
                    // if (err) {
                    //     console.log("Error", err);
                    // } else {
                    //     console.log("Success", data);
                    // }
                    // })

                    client = new _awsAppsync2.default({
                        url: _AppSync2.default.graphqlEndpoint,
                        region: _AppSync2.default.region,
                        auth: {
                            type: _AppSync2.default.authenticationType,
                            credentials: _global.config.credentials
                        },
                        complexObjectsCredentials: _global.config.credentials
                    });

                    client.store.cache = new _apolloCacheInmemory.InMemoryCache().restore(window.__APOLLO_STATE__);

                    middleware = [_index.localStorageDump, _index.localStorageLoad, _reduxThunk2.default];

                    if (!(process.env.NODE_ENV !== 'production')) {
                        _context.next = 13;
                        break;
                    }

                    _context.next = 10;
                    return Promise.resolve().then(function () {
                        return _interopRequireWildcard(require('redux-logger'));
                    });

                case 10:
                    _ref2 = _context.sent;
                    logger = _ref2.logger;

                    middleware = [].concat(_toConsumableArray(middleware), [logger]);

                case 13:
                    store = (0, _redux.createStore)(_reducers2.default, window.__REDUX_STATE__, _redux.applyMiddleware.apply(undefined, _toConsumableArray(middleware)));

                    store.dispatch({ type: 'CLIENT_INIT' });

                    WithProvider = function WithProvider() {
                        return _react2.default.createElement(
                            _reactApollo.ApolloProvider,
                            { client: client },
                            _react2.default.createElement(
                                _reactRedux.Provider,
                                { store: store },
                                _react2.default.createElement(
                                    _BrowserRouter3.default,
                                    null,
                                    _react2.default.createElement(_App2.default, null)
                                )
                            )
                        );
                    };

                    _reactLoadable2.default.preloadReady().then(function () {
                        (0, _reactDom.hydrate)(_react2.default.createElement(WithProvider, null), document.getElementById('root'));
                    });

                case 17:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}))();
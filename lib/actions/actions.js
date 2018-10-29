'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateAddPageCache = exports.userEmailVerified = exports.userLogoutFailure = exports.userLogoutSuccess = exports.userLogoutStart = exports.userLogout = exports.userLoginFailure = exports.userLoginSuccess = exports.userLoginStart = exports.userLogin = exports.generateS3Hash = exports.restoreState = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var restoreState = exports.restoreState = function restoreState(payload) {
    return {
        type: 'RESTORE_STATE',
        payload: payload
    };
};

var generateS3Hash = exports.generateS3Hash = function generateS3Hash() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
            var hash, _ref2, Auth, res;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            hash = getState().addpage.s3Hash;

                            if (!(Object.keys(hash).length > 0 && hash.params && hash.params['x-amz-date'] && hash.params['x-amz-date'] === new Date().toISOString().replace(/-/g, '').split('T')[0])) {
                                _context.next = 6;
                                break;
                            }

                            // current hash works
                            console.log('current hash works');
                            return _context.abrupt('return', true);

                        case 6:
                            // fetch hash
                            console.log('fetching new hash');
                            _context.next = 9;
                            return Promise.resolve().then(function () {
                                return _interopRequireWildcard(require('@aws-amplify/auth/lib'));
                            });

                        case 9:
                            _ref2 = _context.sent;
                            Auth = _ref2.default;
                            _context.t0 = fetch;
                            _context.t1 = JSON;
                            _context.next = 15;
                            return Auth.currentCredentials();

                        case 15:
                            _context.t2 = _context.sent.params.IdentityId;
                            _context.t3 = {
                                IdentityId: _context.t2
                            };
                            _context.t4 = _context.t1.stringify.call(_context.t1, _context.t3);
                            _context.t5 = { "Content-Type": "application/json" };
                            _context.t6 = {
                                method: 'POST',
                                body: _context.t4,
                                headers: _context.t5
                            };
                            _context.next = 22;
                            return (0, _context.t0)("/api/get_signature", _context.t6);

                        case 22:
                            res = _context.sent;
                            _context.t7 = dispatch;
                            _context.t8 = setS3Hash;
                            _context.next = 27;
                            return res.json();

                        case 27:
                            _context.t9 = _context.sent;
                            _context.t10 = (0, _context.t8)(_context.t9);
                            (0, _context.t7)(_context.t10);
                            return _context.abrupt('return', true);

                        case 31:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();
};

var setS3Hash = function setS3Hash(s3Hash) {
    return {
        type: 'SET_S3_HASH',
        s3Hash: s3Hash
    };
};

var userLogin = exports.userLogin = function userLogin(payload) {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
            var _ref4, Auth;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            dispatch(userLoginStart());
                            _context3.next = 3;
                            return Promise.resolve().then(function () {
                                return _interopRequireWildcard(require('@aws-amplify/auth/lib'));
                            });

                        case 3:
                            _ref4 = _context3.sent;
                            Auth = _ref4.default;

                            Auth.signIn(payload.username, payload.password).then(function () {
                                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(userData) {
                                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                                        while (1) {
                                            switch (_context2.prev = _context2.next) {
                                                case 0:
                                                    _context2.t0 = dispatch;
                                                    _context2.t1 = userLoginSuccess;
                                                    _context2.next = 4;
                                                    return Auth.currentCredentials();

                                                case 4:
                                                    _context2.t2 = _context2.sent.data.IdentityId;
                                                    _context2.t3 = userData.username;
                                                    _context2.t4 = userData.signInUserSession.idToken.payload.email_verified;
                                                    _context2.t5 = {
                                                        identityId: _context2.t2,
                                                        username: _context2.t3,
                                                        emailVerified: _context2.t4
                                                    };
                                                    _context2.t6 = (0, _context2.t1)(_context2.t5);
                                                    (0, _context2.t0)(_context2.t6);


                                                    fetch("/api/set_user", {
                                                        method: 'POST',
                                                        body: JSON.stringify({
                                                            user: {
                                                                authenticated: true,
                                                                username: userData.username,
                                                                emailVerified: userData.signInUserSession.idToken.payload.email_verified
                                                            }
                                                        }),
                                                        headers: { "Content-Type": "application/json" }
                                                    });

                                                case 11:
                                                case 'end':
                                                    return _context2.stop();
                                            }
                                        }
                                    }, _callee2, undefined);
                                }));

                                return function (_x4) {
                                    return _ref5.apply(this, arguments);
                                };
                            }()).catch(function (error) {
                                dispatch(userLoginFailure(error));
                            });

                        case 6:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x3) {
            return _ref3.apply(this, arguments);
        };
    }();
};

var userLoginStart = exports.userLoginStart = function userLoginStart() {
    return {
        type: 'USER_LOGIN_START'
    };
};

var userLoginSuccess = exports.userLoginSuccess = function userLoginSuccess(payload) {
    return {
        type: 'USER_LOGIN_SUCCESS',
        payload: payload
    };
};

var userLoginFailure = exports.userLoginFailure = function userLoginFailure(error) {
    return {
        type: 'USER_LOGIN_FAILURE',
        error: error
    };
};

var userLogout = exports.userLogout = function userLogout() {
    return function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(dispatch) {
            var _ref7, Auth;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            dispatch(userLogoutStart());
                            _context4.next = 3;
                            return Promise.resolve().then(function () {
                                return _interopRequireWildcard(require('@aws-amplify/auth/lib'));
                            });

                        case 3:
                            _ref7 = _context4.sent;
                            Auth = _ref7.default;

                            Auth.signOut().then(function (data) {
                                return dispatch(userLogoutSuccess(data));
                            }).catch(function (error) {
                                return dispatch(userLogoutFailure(error));
                            });

                        case 6:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function (_x5) {
            return _ref6.apply(this, arguments);
        };
    }();
};

var userLogoutStart = exports.userLogoutStart = function userLogoutStart() {
    return {
        type: 'USER_LOGOUT_START'
    };
};

var userLogoutSuccess = exports.userLogoutSuccess = function userLogoutSuccess(payload) {
    return {
        type: 'USER_LOGOUT_SUCCESS',
        payload: payload
    };
};

var userLogoutFailure = exports.userLogoutFailure = function userLogoutFailure(error) {
    return {
        type: 'USER_LOGOUT_FAILURE',
        error: error
    };
};

// used in code verify page
var userEmailVerified = exports.userEmailVerified = function userEmailVerified() {
    return {
        type: 'USER_EMAIL_VERIFIED'
    };
};

var updateAddPageCache = exports.updateAddPageCache = function updateAddPageCache(payload) {
    return {
        type: 'UPDATE_ADD_PAGE_CACHE',
        payload: payload
    };
};
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(restoreState, 'restoreState', 'src/actions/actions.js');
    reactHotLoader.register(generateS3Hash, 'generateS3Hash', 'src/actions/actions.js');
    reactHotLoader.register(setS3Hash, 'setS3Hash', 'src/actions/actions.js');
    reactHotLoader.register(userLogin, 'userLogin', 'src/actions/actions.js');
    reactHotLoader.register(userLoginStart, 'userLoginStart', 'src/actions/actions.js');
    reactHotLoader.register(userLoginSuccess, 'userLoginSuccess', 'src/actions/actions.js');
    reactHotLoader.register(userLoginFailure, 'userLoginFailure', 'src/actions/actions.js');
    reactHotLoader.register(userLogout, 'userLogout', 'src/actions/actions.js');
    reactHotLoader.register(userLogoutStart, 'userLogoutStart', 'src/actions/actions.js');
    reactHotLoader.register(userLogoutSuccess, 'userLogoutSuccess', 'src/actions/actions.js');
    reactHotLoader.register(userLogoutFailure, 'userLogoutFailure', 'src/actions/actions.js');
    reactHotLoader.register(userEmailVerified, 'userEmailVerified', 'src/actions/actions.js');
    reactHotLoader.register(updateAddPageCache, 'updateAddPageCache', 'src/actions/actions.js');
    leaveModule(module);
})();

;
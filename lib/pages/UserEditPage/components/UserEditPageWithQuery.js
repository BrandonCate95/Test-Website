'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _UserEditPageSideBarContent = require('./UserEditPageSideBarContent');

var _UserEditPageSideBarContent2 = _interopRequireDefault(_UserEditPageSideBarContent);

var _NavPageTemplate = require('../../../components/groups/NavPageTemplate');

var _NavPageTemplate2 = _interopRequireDefault(_NavPageTemplate);

var _NavBarSearchPost = require('../../../components/groups/NavBarSearch&Post');

var _NavBarSearchPost2 = _interopRequireDefault(_NavBarSearchPost);

var _getKeyWithoutPrefix = require('../../../utilities/getKeyWithoutPrefix');

var _getKeyWithoutPrefix2 = _interopRequireDefault(_getKeyWithoutPrefix);

var _awsAmplify = require('aws-amplify');

var _awsExports = require('../../../aws-exports');

var _awsExports2 = _interopRequireDefault(_awsExports);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Spinner = require('../../../components/misc/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Loading = function Loading() {
    return _react2.default.createElement(
        'div',
        { style: { position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" } },
        _react2.default.createElement(_Spinner2.default, { large: true, primary: true })
    );
};

var UserPageEditContent = typeof window !== 'undefined' ? (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('./UserEditPageContent'));
        });
    },
    modules: ['./UserEditPageContent'],
    webpack: function webpack() {
        return [require.resolveWeak('./UserEditPageContent')];
    },
    loading: Loading
}) : _react2.default.createElement('div', null);

var UserPageEdit = function (_React$Component) {
    _inherits(UserPageEdit, _React$Component);

    function UserPageEdit() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, UserPageEdit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserPageEdit.__proto__ || Object.getPrototypeOf(UserPageEdit)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            mainImgModel: {
                id: 'froalaMainImgEditor',
                src: '#',
                class: 'fr-view fr-fil fr-dib pos-absolute'
            },
            logoImgModel: {
                id: 'froalaLogoImgEditor',
                src: '#',
                class: 'fr-view fr-fil fr-dib'
            },
            description: _this.props.data.description || ''
        }, _this.handleMainImgModelChange = function (mainImgModel) {
            _this.setState({ mainImgModel: mainImgModel });
        }, _this.handleLogoImgModelChange = function (logoImgModel) {
            _this.setState({ logoImgModel: logoImgModel });
        }, _this.handleInputChange = function (event) {
            var target = event.target;
            var value = target.value;
            var name = target.name;

            _this.setState(_defineProperty({}, name, value));
        }, _this.formatImgFile = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(id, visibility, file) {
                var fileName, mimeType, _$exec, _$exec2, extension, _ref3, identityId, bucket, region, key;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                fileName = file.name, mimeType = file.type;
                                _$exec = /([^.]+)(\.(\w+))?$/.exec(fileName), _$exec2 = _slicedToArray(_$exec, 4), extension = _$exec2[3];
                                _context.next = 4;
                                return _awsAmplify.Auth.currentCredentials();

                            case 4:
                                _ref3 = _context.sent;
                                identityId = _ref3.identityId;
                                bucket = _awsExports2.default.aws_user_files_s3_bucket;
                                region = _awsExports2.default.aws_user_files_s3_bucket_region;
                                key = visibility + '/' + identityId + '/' + id + (extension && '.') + extension;
                                return _context.abrupt('return', {
                                    s3Key: '' + id + (extension && '.') + extension,
                                    file: {
                                        bucket: bucket,
                                        key: key,
                                        region: region,
                                        mimeType: mimeType,
                                        localUri: file
                                    }
                                });

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x, _x2, _x3) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.componentWillMount = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var pageSrc, logoSrc, mainImgModel, logoImgModel, description;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _awsAmplify.Storage.get((0, _getKeyWithoutPrefix2.default)(_this.props.data.pageImg.file.key), { level: 'protected' }).then(function (result) {
                                return result;
                            }).catch(function (err) {
                                return '#';
                            });

                        case 2:
                            pageSrc = _context2.sent;
                            _context2.next = 5;
                            return _awsAmplify.Storage.get((0, _getKeyWithoutPrefix2.default)(_this.props.data.logoImg.file.key), { level: 'protected' }).then(function (result) {
                                return result;
                            }).catch(function (err) {
                                return '#';
                            });

                        case 5:
                            logoSrc = _context2.sent;
                            mainImgModel = Object.assign({}, _this.state.mainImgModel, { src: pageSrc });
                            logoImgModel = Object.assign({}, _this.state.logoImgModel, { src: logoSrc });
                            description = _this.props.data.description;

                            _this.setState({ mainImgModel: mainImgModel, logoImgModel: logoImgModel, description: description });

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(UserPageEdit, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                mainImgModel = _state.mainImgModel,
                logoImgModel = _state.logoImgModel,
                description = _state.description;
            var _props = this.props,
                username = _props.username,
                user = _props.user,
                data = _props.data;

            return _react2.default.createElement(
                _NavPageTemplate2.default,
                {
                    navBarType: 'search',
                    sideBarInitialOpen: user === username
                },
                _react2.default.createElement(
                    _NavPageTemplate.NavBarContainer,
                    {
                        'navpage-role': 'navbar'
                    },
                    _react2.default.createElement(_NavBarSearchPost2.default, null)
                ),
                _react2.default.createElement(
                    _NavPageTemplate.SideBarContainer,
                    {
                        'navpage-role': 'sidebar'
                    },
                    _react2.default.createElement(_UserEditPageSideBarContent2.default, {
                        userMatch: user === username,
                        user: user,
                        userInput: this.state
                    })
                ),
                _react2.default.createElement(
                    _NavPageTemplate.PageContentContainer,
                    {
                        'navpage-role': 'page-content'
                    },
                    _react2.default.createElement(UserPageEditContent, {
                        userMatch: user === username,
                        username: user,
                        mainImgModel: mainImgModel,
                        logoImgModel: logoImgModel,
                        description: description,
                        handleMainImgModelChange: this.handleMainImgModelChange.bind(this),
                        handleLogoImgModelChange: this.handleLogoImgModelChange.bind(this),
                        handleInputChange: this.handleInputChange.bind(this),
                        formatImgFile: this.formatImgFile.bind(this),
                        userData: data
                    })
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return UserPageEdit;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        username: state.user.username
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(UserPageEdit);

exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Loading, 'Loading', 'src/pages/UserEditPage/components/UserEditPageWithQuery.js');
    reactHotLoader.register(UserPageEditContent, 'UserPageEditContent', 'src/pages/UserEditPage/components/UserEditPageWithQuery.js');
    reactHotLoader.register(UserPageEdit, 'UserPageEdit', 'src/pages/UserEditPage/components/UserEditPageWithQuery.js');
    reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'src/pages/UserEditPage/components/UserEditPageWithQuery.js');
    reactHotLoader.register(_default, 'default', 'src/pages/UserEditPage/components/UserEditPageWithQuery.js');
    leaveModule(module);
})();

;
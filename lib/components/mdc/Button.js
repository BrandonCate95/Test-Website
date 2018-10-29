'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Link2 = require('react-router-dom/Link');

var _Link3 = _interopRequireDefault(_Link2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _Spinner = require('../misc/Spinner');

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {MDCRipple} from '@material/ripple'


var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.buttonRipple = null, _this.btnRef = !_this.props.icon ? _react2.default.createRef() : undefined, _this.componentDidMount = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref3, MDCRipple;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (_this.props.icon) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 3;
                            return Promise.resolve().then(function () {
                                return _interopRequireWildcard(require('@material/ripple'));
                            });

                        case 3:
                            _ref3 = _context.sent;
                            MDCRipple = _ref3.MDCRipple;

                            _this.buttonRipple = new MDCRipple(_this.btnRef.current);

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.componentWillUnmount = function () {
            if (!_this.props.icon) {
                _this.buttonRipple.destroy();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var props = this.props;


            var button = _react2.default.createElement(
                'button',
                {
                    ref: !props.icon ? this.btnRef : undefined,
                    title: props.title,
                    type: props.type,
                    role: props.role,
                    tabIndex: props.tabIndex,
                    style: props.style,
                    className: '\n                    ' + (props.icon ? 'mdc-icon-button material-icons mdc-ripple-bounded--small' : 'mdc-button') + '\n                    ' + (props.raised ? 'mdc-button--raised' : '') + '\n                    ' + (props.dense ? 'mdc-button--dense' : '') + '\n                    ' + (props.outlined ? 'mdc-button--outlined' : '') + '\n                    ' + (props.primary ? 'mdc-theme-primary' : '') + '\n                    ' + (props.secondary ? 'mdc-theme-secondary' : '') + '\n                    ' + (props.tertiary ? 'mdc-theme-tertiary' : '') + '\n                    ' + (props.neutral ? 'mdc-theme-neutral' : '') + '\n                    ' + (props.error ? 'mdc-theme-tertiary--dark' : '') + '\n                    ' + props.className + '\n                ',
                    onClick: props.onClick,
                    onMouseEnter: props.onMouseEnter,
                    onMouseLeave: props.onMouseLeave,
                    disabled: props.disabled || props.loading,
                    'aria-pressed': props['aria-pressed']
                },
                props.icon && !props.loading && props.children,
                !props.icon && props.children,
                props.loading && _react2.default.createElement(_Spinner2.default, {
                    primary: props.primary,
                    secondary: props.secondary,
                    neutral: props.neutral,
                    style: { marginLeft: '5px' },
                    small: !props.icon,
                    medium: props.icon
                })
            );

            if (props.link) {
                return _react2.default.createElement(
                    _Link3.default,
                    {
                        to: props.linkTo,
                        style: _extends({ textDecoration: "none", color: "inherit" }, props.style),
                        className: props.className
                    },
                    button
                );
            }

            return button;
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return Button;
}(_react2.default.Component);

var _default = Button;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Button, 'Button', 'src/components/mdc/Button.js');
    reactHotLoader.register(_default, 'default', 'src/components/mdc/Button.js');
    leaveModule(module);
})();

;
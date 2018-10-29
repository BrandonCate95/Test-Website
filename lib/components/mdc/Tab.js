'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Panels = exports.Panel = exports.Navs = exports.Nav = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['display:none !important;&.active{display:flex !important;}'], ['display:none !important;&.active{display:flex !important;}']);

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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import {MDCTabBar} from '@material/tabs'

var DefaultPanel = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1neudwr-0'
})(_templateObject);

var Nav = exports.Nav = function Nav(props) {
    return _react2.default.createElement(
        'a',
        {
            role: 'tab',
            'aria-controls': props["aria-controls"],
            className: 'mdc-tab ' + props.className
        },
        props.children
    );
};

var Navs = exports.Navs = function Navs(_ref) {
    var style = _ref.style,
        className = _ref.className,
        children = _ref.children;


    var validChildren = children.filter(function (child) {
        return child.props && child.props["tab-role"] === 'nav';
    });

    var i = 1;
    var childrenWithProps = _react2.default.Children.map(validChildren, function (child) {
        return _react2.default.cloneElement(child, _extends({}, i === 1 && { className: 'mdc-tab--active' }, { "aria-controls": 'panel-' + i++ }));
    });

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        childrenWithProps
    );
};

var Panel = exports.Panel = function Panel(props) {
    return _react2.default.createElement(
        DefaultPanel,
        {
            id: props.id,
            className: 'panel ' + props.className,
            role: 'tabpanel',
            'aria-hidden': props["aria-hidden"]
        },
        props.children
    );
};

var Panels = exports.Panels = function Panels(_ref2) {
    var children = _ref2.children;


    var validChildren = children.filter(function (child) {
        return child.props && child.props["tab-role"] === 'panel';
    });

    var i = 1;
    var childrenWithProps = _react2.default.Children.map(validChildren, function (child) {
        return _react2.default.cloneElement(child, _extends({}, i === 1 && { className: 'active' }, { id: 'panel-' + i++, "aria-hidden": i === 1 ? "false" : "true" }));
    });

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        childrenWithProps
    );
};

var Dot = function Dot(props) {
    return _react2.default.createElement(
        'a',
        {
            className: 'dot ' + props.className,
            'data-trigger': props["data-trigger"]
        },
        ' '
    );
};

var TabContainer = function (_React$Component) {
    _inherits(TabContainer, _React$Component);

    function TabContainer() {
        var _ref3,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, TabContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = TabContainer.__proto__ || Object.getPrototypeOf(TabContainer)).call.apply(_ref3, [this].concat(args))), _this), _this.dynamicTabBar = null, _this.dynamicTabBarRef = _react2.default.createRef(), _this.dotsRef = _react2.default.createRef(), _this.panelsRef = _react2.default.createRef(), _this.componentDidMount = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref5, MDCTabBar;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return Promise.resolve().then(function () {
                                return _interopRequireWildcard(require('@material/tabs'));
                            });

                        case 2:
                            _ref5 = _context.sent;
                            MDCTabBar = _ref5.MDCTabBar;

                            _this.dynamicTabBar = window.dynamicTabBar = new MDCTabBar(_this.dynamicTabBarRef.current);

                            _this.dynamicTabBar.tabs.forEach(function (tab) {
                                tab.preventDefaultOnClick = true;
                            });

                            _this.dynamicTabBar.listen('MDCTabBar:change', _this.tabBarChange);

                            _this.dotsRef.current.addEventListener('click', _this.dotsChange);

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.componentWillUnmount = function () {
            _this.dynamicTabBar.destroy();
            _this.dotsRef.current.removeEventListener('click', _this.dotsChange);
        }, _this.updateDot = function (index) {
            var activeDot = _this.dotsRef.current.querySelector('.dot.active');
            if (activeDot) {
                activeDot.classList.remove('active');
            }
            var newActiveDot = _this.dotsRef.current.querySelector('.dot:nth-child(' + (index + 1) + ')');
            if (newActiveDot) {
                newActiveDot.classList.add('active');
            }
        }, _this.updatePanel = function (index) {
            var activePanel = _this.panelsRef.current.querySelector('.panel.active');
            if (activePanel) {
                activePanel.classList.remove('active');
            }
            var newActivePanel = _this.panelsRef.current.querySelector('.panel:nth-child(' + (index + 1) + ')');
            if (newActivePanel) {
                newActivePanel.classList.add('active');
            }
        }, _this.tabBarChange = function (_ref6) {
            var tabs = _ref6.detail;

            var nthChildIndex = tabs.activeTabIndex;

            _this.updatePanel(nthChildIndex);
            _this.updateDot(nthChildIndex);
        }, _this.dotsChange = function (evt) {
            if (!evt.target.classList.contains('dot')) {
                return;
            }

            evt.preventDefault();

            var dotIndex = [].slice.call(_this.dotsRef.current.querySelectorAll('.dot')).indexOf(evt.target);

            if (dotIndex >= 0) {
                _this.dynamicTabBar.activeTabIndex = dotIndex;
            }

            _this.updatePanel(dotIndex);
            _this.updateDot(dotIndex);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TabContainer, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            var tabs = props.children.filter(function (child) {
                return child.props["tab-role"] === 'navs';
            });
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'section',
                    null,
                    _react2.default.createElement(
                        'nav',
                        { ref: this.dynamicTabBarRef, id: 'dynamic-tab-bar', className: 'mdc-tab-bar', role: 'tablist', style: { margin: "0" } },
                        tabs,
                        _react2.default.createElement('span', { className: 'mdc-tab-bar__indicator' })
                    )
                ),
                _react2.default.createElement(
                    'section',
                    null,
                    _react2.default.createElement(
                        'div',
                        { ref: this.panelsRef, className: 'panels' },
                        props.children.filter(function (child) {
                            return child.props["tab-role"] === 'panels';
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { ref: this.dotsRef, className: 'dots' },
                        tabs[0].props.children.forEach(function (child, index) {
                            return _react2.default.createElement(Dot, {
                                className: index === 0 ? "active" : '',
                                'data-trigger': 'panel-' + (index + 1)
                            });
                        })
                    )
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

    return TabContainer;
}(_react2.default.Component);

var _default = TabContainer;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(DefaultPanel, 'DefaultPanel', 'src/components/mdc/Tab.js');
    reactHotLoader.register(Nav, 'Nav', 'src/components/mdc/Tab.js');
    reactHotLoader.register(Navs, 'Navs', 'src/components/mdc/Tab.js');
    reactHotLoader.register(Panel, 'Panel', 'src/components/mdc/Tab.js');
    reactHotLoader.register(Panels, 'Panels', 'src/components/mdc/Tab.js');
    reactHotLoader.register(Dot, 'Dot', 'src/components/mdc/Tab.js');
    reactHotLoader.register(TabContainer, 'TabContainer', 'src/components/mdc/Tab.js');
    reactHotLoader.register(_default, 'default', 'src/components/mdc/Tab.js');
    leaveModule(module);
})();

;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['display:flex;margin:auto 0;'], ['display:flex;margin:auto 0;']),
    _templateObject2 = _taggedTemplateLiteral(['margin-left:8px !important;margin-right:-4px !important;height:12px !important;width:12px !important;font-size:12px !important;'], ['margin-left:8px !important;margin-right:-4px !important;height:12px !important;width:12px !important;font-size:12px !important;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('../mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Row = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1k7j5o5-0'
})(_templateObject);

var CloseIcon = /*#__PURE__*/_styledComponents2.default.i.withConfig({
    componentId: 'sc-1k7j5o5-1'
})(_templateObject2);

var SubscribeBtn = function (_React$Component) {
    _inherits(SubscribeBtn, _React$Component);

    function SubscribeBtn() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SubscribeBtn);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SubscribeBtn.__proto__ || Object.getPrototypeOf(SubscribeBtn)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            subscribed: false,
            subscriberCount: 1000,
            subscribeHover: false
        }, _this.handleSubscribe = function () {
            _this.setState({
                subscribed: _this.state.subscribed ? false : true,
                subscriberCount: _this.state.subscribed ? _this.state.subscriberCount - 1 : _this.state.subscriberCount + 1
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SubscribeBtn, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                subscribed = _state.subscribed,
                subscriberCount = _state.subscriberCount,
                subscribeHover = _state.subscribeHover;

            return _react2.default.createElement(
                Row,
                null,
                _react2.default.createElement(
                    _Button2.default,
                    {
                        style: {
                            width: "140px",
                            fontWeight: subscribed ? 'bold' : 'normal'
                        },
                        onMouseEnter: !subscribed ? function () {
                            return _this2.setState({ subscribeHover: true });
                        } : undefined,
                        onMouseLeave: !subscribed ? function () {
                            return _this2.setState({ subscribeHover: false });
                        } : undefined,
                        onClick: this.handleSubscribe.bind(this),
                        raised: !subscribed ? true : undefined,
                        dense: true,
                        outlined: subscribed ? true : undefined,
                        tertiary: true
                    },
                    !subscribed && _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement(
                            'i',
                            { className: 'material-icons mdc-button__icon', 'aria-hidden': 'true' },
                            'add'
                        ),
                        subscribeHover ? subscriberCount : 'subscribe'
                    ),
                    subscribed && _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        subscriberCount,
                        _react2.default.createElement(
                            CloseIcon,
                            { className: 'material-icons mdc-button__icon', 'aria-hidden': 'true' },
                            'close'
                        )
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

    return SubscribeBtn;
}(_react2.default.Component);

var _default = SubscribeBtn;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Row, 'Row', 'src/components/Buttons/SubscribeBtn.js');
    reactHotLoader.register(CloseIcon, 'CloseIcon', 'src/components/Buttons/SubscribeBtn.js');
    reactHotLoader.register(SubscribeBtn, 'SubscribeBtn', 'src/components/Buttons/SubscribeBtn.js');
    reactHotLoader.register(_default, 'default', 'src/components/Buttons/SubscribeBtn.js');
    leaveModule(module);
})();

;
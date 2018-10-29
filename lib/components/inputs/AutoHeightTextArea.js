'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['width:100%;resize:none;border:none;margin:0 5px 20px 5px;fontSize:14px;color:#777;outline:none;'], ['width:100%;resize:none;border:none;margin:0 5px 20px 5px;fontSize:14px;color:#777;outline:none;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Textarea = /*#__PURE__*/_styledComponents2.default.textarea.withConfig({
    componentId: 'hrznq3-0'
})(_templateObject);

var AutoHeightTextArea = function (_React$Component) {
    _inherits(AutoHeightTextArea, _React$Component);

    function AutoHeightTextArea() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AutoHeightTextArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutoHeightTextArea.__proto__ || Object.getPrototypeOf(AutoHeightTextArea)).call.apply(_ref, [this].concat(args))), _this), _this.textArea = _react2.default.createRef(), _this.componentDidMount = function () {
            var textarea = _this.textArea.current;
            textarea.style.height = textarea.scrollHeight;
            textarea.style.overflowY = "hidden";
            textarea.addEventListener("input", _this.OnInput, false);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AutoHeightTextArea, [{
        key: 'OnInput',
        value: function OnInput() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                id = _props.id,
                name = _props.name,
                className = _props.className,
                value = _props.value,
                handleTextAreaChange = _props.handleTextAreaChange,
                placeholder = _props.placeholder,
                onFocus = _props.onFocus,
                onBlur = _props.onBlur;

            return _react2.default.createElement(Textarea, {
                id: id,
                innerRef: this.textArea,
                style: style,
                className: className ? className : '',
                name: name,
                value: value,
                onChange: handleTextAreaChange,
                placeholder: placeholder,
                onFocus: onFocus,
                onBlur: onBlur
            });
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return AutoHeightTextArea;
}(_react2.default.Component);

var style = {
    width: "100%",
    resize: "none",
    border: "none",
    margin: "0 5px 20px 5px",
    fontSize: "14px",
    color: "#777",
    outline: "none"
};

AutoHeightTextArea.defaultProps = {
    id: '',
    name: '',
    placeholder: ''
};

var _default = AutoHeightTextArea;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Textarea, 'Textarea', 'src/components/inputs/AutoHeightTextArea.js');
    reactHotLoader.register(AutoHeightTextArea, 'AutoHeightTextArea', 'src/components/inputs/AutoHeightTextArea.js');
    reactHotLoader.register(style, 'style', 'src/components/inputs/AutoHeightTextArea.js');
    reactHotLoader.register(_default, 'default', 'src/components/inputs/AutoHeightTextArea.js');
    leaveModule(module);
})();

;
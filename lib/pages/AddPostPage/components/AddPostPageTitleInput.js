'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['width:100%;z-index:2;font-size:48px;font-family:Futura,Trebuchet MS,Arial,sans-serif;outline:none;border:none;line-height:normal !important;margin-bottom:20px;&:focus{outline:none;}&::placeholder{color:#ccc;opacity:1;}&:-ms-input-placeholder{color:#ccc;}&::-ms-input-placeholder{color:#ccc;}&:disabled{color:#212529;background:none;}'], ['width:100%;z-index:2;font-size:48px;font-family:Futura,Trebuchet MS,Arial,sans-serif;outline:none;border:none;line-height:normal !important;margin-bottom:20px;&:focus{outline:none;}&::placeholder{color:#ccc;opacity:1;}&:-ms-input-placeholder{color:#ccc;}&::-ms-input-placeholder{color:#ccc;}&:disabled{color:#212529;background:none;}']),
    _templateObject2 = _taggedTemplateLiteral(['height:20px;padding-left:40px;text-align:right;'], ['height:20px;padding-left:40px;text-align:right;']),
    _templateObject3 = _taggedTemplateLiteral(['opacity:0.3;'], ['opacity:0.3;']);

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

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInputTitle = /*#__PURE__*/_styledComponents2.default.input.withConfig({
    componentId: 'sc-11v97xx-0'
})(_templateObject);

var ErrorMessage = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-11v97xx-1'
})(_templateObject2);

var InUseMessage = /*#__PURE__*/(0, _styledComponents2.default)(ErrorMessage).withConfig({
    componentId: 'sc-11v97xx-2'
})(_templateObject3);

var MainTitleInput = function MainTitleInput(_ref) {
    var title = _ref.title,
        handleTitleChange = _ref.handleTitleChange,
        preview = _ref.preview,
        titleCheck = _ref.titleCheck,
        titleCheckUserMatch = _ref.titleCheckUserMatch,
        handleTitleFocus = _ref.handleTitleFocus,
        handleTitleBlur = _ref.handleTitleBlur;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(StyledInputTitle, {
            id: 'main-title',
            className: 'mdc-typography--headline2',
            style: { marginTop: preview ? '68px' : '147.2px' },
            name: 'title',
            type: 'text',
            placeholder: 'Title here...',
            value: title,
            onChange: handleTitleChange,
            onFocus: handleTitleFocus,
            onBlur: handleTitleBlur,
            disabled: preview
        }),
        titleCheck && !titleCheckUserMatch && _react2.default.createElement(
            ErrorMessage,
            { className: 'mdc-typography--caption mdc-theme-tertiary--dark-color' },
            !preview && '* title already in use *'
        ),
        titleCheck && titleCheckUserMatch && _react2.default.createElement(
            InUseMessage,
            { className: 'mdc-typography--caption' },
            !preview && '* title in use by you *'
        )
    );
};

var _default = MainTitleInput;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(StyledInputTitle, 'StyledInputTitle', 'src/pages/AddPostPage/components/AddPostPageTitleInput.js');
    reactHotLoader.register(ErrorMessage, 'ErrorMessage', 'src/pages/AddPostPage/components/AddPostPageTitleInput.js');
    reactHotLoader.register(InUseMessage, 'InUseMessage', 'src/pages/AddPostPage/components/AddPostPageTitleInput.js');
    reactHotLoader.register(MainTitleInput, 'MainTitleInput', 'src/pages/AddPostPage/components/AddPostPageTitleInput.js');
    reactHotLoader.register(_default, 'default', 'src/pages/AddPostPage/components/AddPostPageTitleInput.js');
    leaveModule(module);
})();

;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['display:flex;align-items:center;justify-content:center;height:100%;'], ['display:flex;align-items:center;justify-content:center;height:100%;']),
    _templateObject2 = _taggedTemplateLiteral(['display:flex;flex-direction:column;width:30%;padding:35px;border-radius:2px;background-color:#fff;'], ['display:flex;flex-direction:column;width:30%;padding:35px;border-radius:2px;background-color:#fff;']),
    _templateObject3 = _taggedTemplateLiteral(['display:flex;justify-content:center;margin:24px 0;'], ['display:flex;justify-content:center;margin:24px 0;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _NavBarHomeLink = require('../../../components/links/NavBarHomeLink');

var _NavBarHomeLink2 = _interopRequireDefault(_NavBarHomeLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Row = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'fc8rmv-0'
})(_templateObject);

var ColumnForm = /*#__PURE__*/_styledComponents2.default.form.withConfig({
    componentId: 'fc8rmv-1'
})(_templateObject2);

var StyledHeader = /*#__PURE__*/_styledComponents2.default.h3.withConfig({
    componentId: 'fc8rmv-2'
})(_templateObject3);

var AuthPageTemplate = function AuthPageTemplate(_ref) {
    var handleSubmit = _ref.handleSubmit,
        children = _ref.children;
    return _react2.default.createElement(
        Row,
        { className: 'mdc-theme-background--grey-light' },
        _react2.default.createElement(
            ColumnForm,
            { onSubmit: handleSubmit, className: 'mdc-elevation--z2' },
            _react2.default.createElement(
                StyledHeader,
                null,
                _react2.default.createElement(_NavBarHomeLink2.default, {
                    className: 'mdc-typography--headline2'
                })
            ),
            children
        )
    );
};

var _default = AuthPageTemplate;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Row, 'Row', 'src/pages/AuthPage/template/AuthPageTemplate.js');
    reactHotLoader.register(ColumnForm, 'ColumnForm', 'src/pages/AuthPage/template/AuthPageTemplate.js');
    reactHotLoader.register(StyledHeader, 'StyledHeader', 'src/pages/AuthPage/template/AuthPageTemplate.js');
    reactHotLoader.register(AuthPageTemplate, 'AuthPageTemplate', 'src/pages/AuthPage/template/AuthPageTemplate.js');
    reactHotLoader.register(_default, 'default', 'src/pages/AuthPage/template/AuthPageTemplate.js');
    leaveModule(module);
})();

;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Redirect2 = require('react-router-dom/Redirect');

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../../../../../../../components/mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var CodeSendBtn = function CodeSendBtn(_ref) {
    var loading = _ref.loading,
        redirect = _ref.redirect,
        from = _ref.from,
        username = _ref.username;

    if (redirect) {
        return _react2.default.createElement(_Redirect3.default, { to: {
                pathname: '/Auth/ForgotPassword/CodeVerify',
                state: { from: from, username: username }
            } });
    }

    return _react2.default.createElement(
        _Button2.default,
        {
            type: 'submit',
            raised: true,
            loading: loading
        },
        'Send Code'
    );
};

var _default = CodeSendBtn;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(CodeSendBtn, 'CodeSendBtn', 'src/pages/AuthPage/pages/ForgotPasswordAuth/pages/CodeSend/components/CodeSendBtn.js');
    reactHotLoader.register(_default, 'default', 'src/pages/AuthPage/pages/ForgotPasswordAuth/pages/CodeSend/components/CodeSendBtn.js');
    leaveModule(module);
})();

;
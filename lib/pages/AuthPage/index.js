'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Route2 = require('react-router-dom/Route');

var _Route3 = _interopRequireDefault(_Route2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CodeVerifyPage = require('./pages/CodeVerifyPage');

var _CodeVerifyPage2 = _interopRequireDefault(_CodeVerifyPage);

var _SignInPage = require('./pages/SignInPage');

var _SignInPage2 = _interopRequireDefault(_SignInPage);

var _SignUpPage = require('./pages/SignUpPage');

var _SignUpPage2 = _interopRequireDefault(_SignUpPage);

var _ForgotPasswordAuth = require('./pages/ForgotPasswordAuth');

var _ForgotPasswordAuth2 = _interopRequireDefault(_ForgotPasswordAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var AuthPage = function AuthPage(_ref) {
    var match = _ref.match;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_Route3.default, { path: match.url + '/CodeVerify', component: _CodeVerifyPage2.default }),
        _react2.default.createElement(_Route3.default, { path: match.url + '/SignIn', component: _SignInPage2.default }),
        _react2.default.createElement(_Route3.default, { path: match.url + '/SignUp', component: _SignUpPage2.default }),
        _react2.default.createElement(_Route3.default, { path: match.url + '/ForgotPassword', component: _ForgotPasswordAuth2.default })
    );
};

var _default = AuthPage;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(AuthPage, 'AuthPage', 'src/pages/AuthPage/index.js');
    reactHotLoader.register(_default, 'default', 'src/pages/AuthPage/index.js');
    leaveModule(module);
})();

;
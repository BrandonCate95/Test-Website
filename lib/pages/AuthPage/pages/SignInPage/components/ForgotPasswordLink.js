'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AuthPageLink = require('../../../../../components/links/AuthPageLink');

var _AuthPageLink2 = _interopRequireDefault(_AuthPageLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var ForgotPasswordLink = function ForgotPasswordLink() {
    return _react2.default.createElement(
        _AuthPageLink2.default,
        {
            to: '/Auth/ForgotPassword/CodeSend',
            style: { marginRight: "auto" }
        },
        'Forgot Password?'
    );
};

var _default = ForgotPasswordLink;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(ForgotPasswordLink, 'ForgotPasswordLink', 'src/pages/AuthPage/pages/SignInPage/components/ForgotPasswordLink.js');
    reactHotLoader.register(_default, 'default', 'src/pages/AuthPage/pages/SignInPage/components/ForgotPasswordLink.js');
    leaveModule(module);
})();

;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Route2 = require('react-router-dom/Route');

var _Route3 = _interopRequireDefault(_Route2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CodeVerify = require('./pages/CodeVerify');

var _CodeVerify2 = _interopRequireDefault(_CodeVerify);

var _CodeSend = require('./pages/CodeSend');

var _CodeSend2 = _interopRequireDefault(_CodeSend);

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
        _react2.default.createElement(_Route3.default, { path: match.url + '/CodeVerify', component: _CodeVerify2.default }),
        _react2.default.createElement(_Route3.default, { path: match.url + '/CodeSend', component: _CodeSend2.default })
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

    reactHotLoader.register(AuthPage, 'AuthPage', 'src/pages/AuthPage/pages/ForgotPasswordAuth/index.js');
    reactHotLoader.register(_default, 'default', 'src/pages/AuthPage/pages/ForgotPasswordAuth/index.js');
    leaveModule(module);
})();

;
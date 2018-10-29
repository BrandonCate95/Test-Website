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

var _Button = require('../../../../../components/mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var CodeVerifyBtn = function CodeVerifyBtn(_ref) {
    var loading = _ref.loading,
        redirectToReferrer = _ref.redirectToReferrer,
        from = _ref.from;

    if (redirectToReferrer) {
        return _react2.default.createElement(_Redirect3.default, { to: from });
    }
    return _react2.default.createElement(
        _Button2.default,
        {
            type: 'submit',
            raised: true,
            loading: loading
        },
        'Verify'
    );
};

var _default = CodeVerifyBtn;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(CodeVerifyBtn, 'CodeVerifyBtn', 'src/pages/AuthPage/pages/CodeVerifyPage/components/CodeVerifyBtn.js');
    reactHotLoader.register(_default, 'default', 'src/pages/AuthPage/pages/CodeVerifyPage/components/CodeVerifyBtn.js');
    leaveModule(module);
})();

;
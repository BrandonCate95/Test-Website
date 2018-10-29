'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AuthPageLink = require('./AuthPageLink');

var _AuthPageLink2 = _interopRequireDefault(_AuthPageLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var CodeVerifyLink = function CodeVerifyLink() {
  return _react2.default.createElement(
    _AuthPageLink2.default,
    {
      to: '/Auth/CodeVerify'
    },
    'Code Verify'
  );
};

var _default = CodeVerifyLink;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CodeVerifyLink, 'CodeVerifyLink', 'src/components/links/CodeVerifyLink.js');
  reactHotLoader.register(_default, 'default', 'src/components/links/CodeVerifyLink.js');
  leaveModule(module);
})();

;
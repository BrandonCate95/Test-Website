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

var SignUpLinkWithRouter = function SignUpLinkWithRouter() {
  return _react2.default.createElement(
    _AuthPageLink2.default,
    {
      to: '/Auth/SignUp'
    },
    'Sign Up'
  );
};

var _default = SignUpLinkWithRouter;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SignUpLinkWithRouter, 'SignUpLinkWithRouter', 'src/components/links/SignUpLinkWithRouter.js');
  reactHotLoader.register(_default, 'default', 'src/components/links/SignUpLinkWithRouter.js');
  leaveModule(module);
})();

;
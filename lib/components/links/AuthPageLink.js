'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withRouter2 = require('react-router-dom/withRouter');

var _withRouter3 = _interopRequireDefault(_withRouter2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var AuthPageLink = function AuthPageLink(_ref) {
  var to = _ref.to,
      location = _ref.location,
      style = _ref.style,
      children = _ref.children;


  var locObj = {
    pathname: to
  };
  if (['/Auth/SignUp', '/Auth/SignIn', '/Auth/CodeVerify', '/Auth/ForgotPassword/CodeVerify', '/Auth/ForgotPassword/CodeSend'].indexOf(location.pathname) === -1) {
    locObj.state = { from: location.pathname, fromSearch: location.search };
  } else {
    locObj.state = location.state ? { from: location.state.from, fromSearch: location.state.fromSearch } : { from: '/' };
  }

  return _react2.default.createElement(
    _Button2.default,
    {
      link: true,
      linkTo: locObj,
      style: _extends({ margin: "5px" }, style)
    },
    children
  );
};

var _default = (0, _withRouter3.default)(AuthPageLink);

//adds access to location prop
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AuthPageLink, 'AuthPageLink', 'src/components/links/AuthPageLink.js');
  reactHotLoader.register(_default, 'default', 'src/components/links/AuthPageLink.js');
  leaveModule(module);
})();

;
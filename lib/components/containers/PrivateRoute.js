'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Route2 = require('react-router-dom/Route');

var _Route3 = _interopRequireDefault(_Route2);

var _Redirect2 = require('react-router-dom/Redirect');

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      authenticated = _ref.authenticated,
      rest = _objectWithoutProperties(_ref, ['component', 'authenticated']);

  return _react2.default.createElement(_Route3.default, _extends({}, rest, {
    render: function render(props) {
      return authenticated ? _react2.default.createElement(Component, props) : _react2.default.createElement(_Redirect3.default, { to: { pathname: '/Auth/SignIn', state: { from: props.location } } });
    }
  }));
};

PrivateRoute.defaultProps = {
  state: {
    from: '/'
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(PrivateRoute);

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PrivateRoute, 'PrivateRoute', 'src/components/containers/PrivateRoute.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'src/components/containers/PrivateRoute.js');
  reactHotLoader.register(_default, 'default', 'src/components/containers/PrivateRoute.js');
  leaveModule(module);
})();

;
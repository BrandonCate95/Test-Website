'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _GET_USER_BY_USERNAME = require('../query/GET_USER_BY_USERNAME');

var _GET_USER_BY_USERNAME2 = _interopRequireDefault(_GET_USER_BY_USERNAME);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var GetUserByUsername = function GetUserByUsername(props) {
  return _react2.default.createElement(
    _reactApollo.Query,
    {
      query: _GET_USER_BY_USERNAME2.default,
      variables: { username: props.username },
      skip: !props.username,
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'network-only',
      ssr: true
    },
    function (_ref) {
      var loading = _ref.loading,
          error = _ref.error,
          data = _ref.data,
          refetch = _ref.refetch,
          networkStatus = _ref.networkStatus;

      if (error) return 'Error!: ' + error;
      if (loading) return null;
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.cloneElement(props.children, { loading: loading, error: error, data: typeof data === 'undefined' ? data : data.getUserByUsername.users[0], refetch: refetch, networkStatus: networkStatus })
      );
    }
  );
};

var _default = GetUserByUsername;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GetUserByUsername, 'GetUserByUsername', 'src/queries/components/GetUserByUsername.js');
  reactHotLoader.register(_default, 'default', 'src/queries/components/GetUserByUsername.js');
  leaveModule(module);
})();

;
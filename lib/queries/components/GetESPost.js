'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _GET_ES_POST = require('../query/GET_ES_POST');

var _GET_ES_POST2 = _interopRequireDefault(_GET_ES_POST);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var GetESPost = function GetESPost(props) {
  return _react2.default.createElement(
    _reactApollo.Query,
    {
      query: _GET_ES_POST2.default,
      variables: {
        id: props.postId || 'null'
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'network-only'
    },
    function (_ref) {
      var loading = _ref.loading,
          error = _ref.error,
          data = _ref.data,
          refetch = _ref.refetch,
          networkStatus = _ref.networkStatus;

      if (loading) return null;
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.cloneElement(props.children, _extends({ loading: loading, error: error, data: data, refetch: refetch, networkStatus: networkStatus }, props))
      );
    }
  );
};

var _default = GetESPost;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GetESPost, 'GetESPost', 'src/queries/components/GetESPost.js');
  reactHotLoader.register(_default, 'default', 'src/queries/components/GetESPost.js');
  leaveModule(module);
})();

;
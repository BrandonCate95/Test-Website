'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['width:100%;height:100%;display:flex;align-items:center;justify-content:center;'], ['width:100%;height:100%;display:flex;align-items:center;justify-content:center;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactApollo = require('react-apollo');

var _SEARCH_CONTENT = require('../query/SEARCH_CONTENT');

var _SEARCH_CONTENT2 = _interopRequireDefault(_SEARCH_CONTENT);

var _Spinner = require('../../components/misc/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLoading = /*#__PURE__*/_styledComponents2.default.div.withConfig({
  componentId: 'sc-1cguoal-0'
})(_templateObject);

var SearchContent = function SearchContent(props) {
  return _react2.default.createElement(
    _reactApollo.Query,
    {
      query: _SEARCH_CONTENT2.default,
      variables: { text: props.search },
      skip: !props.search,
      ssr: true,
      notifyOnNetworkStatusChange: true
    },
    function (_ref) {
      var loading = _ref.loading,
          error = _ref.error,
          data = _ref.data,
          refetch = _ref.refetch,
          networkStatus = _ref.networkStatus;

      if (error) return 'Error!: ' + error;
      if (loading) return _react2.default.createElement(
        StyledLoading,
        null,
        _react2.default.createElement(_Spinner2.default, { large: true, primary: true })
      );
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.cloneElement(props.children, { loading: loading, error: error, data: data, refetch: refetch, networkStatus: networkStatus, sideBarOpen: props.sideBarOpen })
      );
    }
  );
};

var _default = SearchContent;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StyledLoading, 'StyledLoading', 'src/queries/components/SearchContent.js');
  reactHotLoader.register(SearchContent, 'SearchContent', 'src/queries/components/SearchContent.js');
  reactHotLoader.register(_default, 'default', 'src/queries/components/SearchContent.js');
  leaveModule(module);
})();

;
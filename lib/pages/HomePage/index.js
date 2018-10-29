'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['position:absolute;width:100%;display:flex;justify-content:flex-end;align-items:center;'], ['position:absolute;width:100%;display:flex;justify-content:flex-end;align-items:center;']),
    _templateObject2 = _taggedTemplateLiteral(['height:100%;display:flex;align-items:center;justify-content:center;'], ['height:100%;display:flex;align-items:center;justify-content:center;']),
    _templateObject3 = _taggedTemplateLiteral(['width:40%;margin-bottom:15%;display:flex;flex-direction:column;align-items:center;'], ['width:40%;margin-bottom:15%;display:flex;flex-direction:column;align-items:center;']),
    _templateObject4 = _taggedTemplateLiteral(['width:100%;margin-bottom:25px !important;'], ['width:100%;margin-bottom:25px !important;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchBar = require('../../components/inputs/SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _UserSignInBtnGrp = require('../../components/groups/UserSignInBtnGrp');

var _UserSignInBtnGrp2 = _interopRequireDefault(_UserSignInBtnGrp);

var _CatagoryCard = require('./components/CatagoryCard');

var _CatagoryCard2 = _interopRequireDefault(_CatagoryCard);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _NavBarHomeLink = require('../../components/links/NavBarHomeLink');

var _Button = require('../../components/mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNav = /*#__PURE__*/_styledComponents2.default.nav.withConfig({
  componentId: 'h1lkk3-0'
})(_templateObject);

var MainRow = /*#__PURE__*/_styledComponents2.default.div.withConfig({
  componentId: 'h1lkk3-1'
})(_templateObject2);

var MainContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
  componentId: 'h1lkk3-2'
})(_templateObject3);

var StyledSearchBar = /*#__PURE__*/(0, _styledComponents2.default)(_SearchBar2.default).withConfig({
  componentId: 'h1lkk3-3'
})(_templateObject4);

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.catagoryGenerator = function () {
      var catagoryList = [{ catagoryName: "test", symbolName: "favorite" }, { catagoryName: "billy", symbolName: "casino" }, { catagoryName: "friend", symbolName: "fitness_center" }];
      return catagoryList;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          StyledNav,
          null,
          _react2.default.createElement(
            _Button2.default,
            {
              link: true,
              linkTo: '/About',
              neutral: true,
              style: { margin: "5px auto 5px 5px" }
            },
            'A boot'
          ),
          _react2.default.createElement(_UserSignInBtnGrp2.default, null)
        ),
        _react2.default.createElement(
          MainRow,
          null,
          _react2.default.createElement(
            MainContainer,
            null,
            _react2.default.createElement(
              'h2',
              { className: 'mdc-typography--headline1' },
              _react2.default.createElement(_NavBarHomeLink.HomeLogo, null)
            ),
            _react2.default.createElement(StyledSearchBar, null),
            _react2.default.createElement(_CatagoryCard2.default, { catagoryList: this.catagoryGenerator() })
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Home;
}(_react2.default.Component);

var _default = Home;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StyledNav, 'StyledNav', 'src/pages/HomePage/index.js');
  reactHotLoader.register(MainRow, 'MainRow', 'src/pages/HomePage/index.js');
  reactHotLoader.register(MainContainer, 'MainContainer', 'src/pages/HomePage/index.js');
  reactHotLoader.register(StyledSearchBar, 'StyledSearchBar', 'src/pages/HomePage/index.js');
  reactHotLoader.register(Home, 'Home', 'src/pages/HomePage/index.js');
  reactHotLoader.register(_default, 'default', 'src/pages/HomePage/index.js');
  leaveModule(module);
})();

;
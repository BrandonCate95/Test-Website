'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['display:flex;align-items:center;height:100%;padding-left:12px !important;padding-right:24px !important;overflow:auto !important;'], ['display:flex;align-items:center;height:100%;padding-left:12px !important;padding-right:24px !important;overflow:auto !important;']),
    _templateObject2 = _taggedTemplateLiteral(['width:60%;padding-left:40px;'], ['width:60%;padding-left:40px;']),
    _templateObject3 = _taggedTemplateLiteral(['width:50%;'], ['width:50%;']),
    _templateObject4 = _taggedTemplateLiteral(['padding:8px 0px !important;', ' ', ''], ['padding:8px 0px !important;', ' ', '']),
    _templateObject5 = _taggedTemplateLiteral(['padding:8px 0px !important;flex:0 0 25% !important;'], ['padding:8px 0px !important;flex:0 0 25% !important;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SearchBar = require('../inputs/SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _UserSignInBtnGrp = require('../groups/UserSignInBtnGrp');

var _UserSignInBtnGrp2 = _interopRequireDefault(_UserSignInBtnGrp);

var _AddPostPageLink = require('../links/AddPostPageLink');

var _AddPostPageLink2 = _interopRequireDefault(_AddPostPageLink);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _NavBar = require('../mdc/NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Button = require('../mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

var _NavBarHomeLink = require('../links/NavBarHomeLink');

var _NavBarHomeLink2 = _interopRequireDefault(_NavBarHomeLink);

var _TitleScrollShow = require('../misc/TitleScrollShow');

var _TitleScrollShow2 = _interopRequireDefault(_TitleScrollShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTitleContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'g4c3qz-0'
})(_templateObject);

var StyledSearchBarSearch = /*#__PURE__*/(0, _styledComponents2.default)(_SearchBar2.default).withConfig({
    componentId: 'g4c3qz-1'
})(_templateObject2);

var StyledSearchBarPage = /*#__PURE__*/(0, _styledComponents2.default)(_SearchBar2.default).withConfig({
    componentId: 'g4c3qz-2'
})(_templateObject3);

var StyledStartSection = /*#__PURE__*/(0, _styledComponents2.default)(_NavBar.StartSection).withConfig({
    componentId: 'g4c3qz-3'
})(_templateObject4, function (props) {
    return props.navBarType === 'search' ? 'width: 240px;' : '';
}, function (props) {
    return props.navBarType === 'post' ? 'flex: 0 0 25% !important;' : '';
});

var StyledMiddleSection = /*#__PURE__*/(0, _styledComponents2.default)(_NavBar.MiddleSection).withConfig({
    componentId: 'g4c3qz-4'
})(_templateObject4, function (props) {
    return props.navBarType === 'search' ? 'flex: 0 0 calc(75% - 240px) !important;' : '';
}, function (props) {
    return props.navBarType === 'post' ? 'flex: 0 0 50% !important; justify-content: center;' : '';
});

var StyledEndSection = /*#__PURE__*/(0, _styledComponents2.default)(_NavBar.EndSection).withConfig({
    componentId: 'g4c3qz-5'
})(_templateObject5);

var NavBar = function NavBar(_ref) {
    var navBarType = _ref.navBarType,
        toggleSidebar = _ref.toggleSidebar,
        title = _ref.title;
    return _react2.default.createElement(
        _NavBar2.default,
        {
            fixed: true
        },
        _react2.default.createElement(
            StyledStartSection,
            { navBarType: navBarType },
            _react2.default.createElement(
                _Button2.default,
                {
                    icon: true,
                    onClick: toggleSidebar,
                    style: { marginLeft: "12px", padding: "0" }
                },
                'menu'
            ),
            _react2.default.createElement(
                StyledTitleContainer,
                { className: 'mdc-top-app-bar__title' },
                _react2.default.createElement(_NavBarHomeLink2.default, {
                    className: 'mdc-typography--headline6'
                })
            ),
            navBarType === 'post' && _react2.default.createElement(StyledSearchBarPage, null)
        ),
        _react2.default.createElement(
            StyledMiddleSection,
            { navBarType: navBarType },
            navBarType === 'search' && _react2.default.createElement(StyledSearchBarSearch, null),
            navBarType === 'post' && _react2.default.createElement(
                _TitleScrollShow2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'mdc-typography--headline5' },
                    title
                )
            )
        ),
        _react2.default.createElement(
            StyledEndSection,
            null,
            _react2.default.createElement(_AddPostPageLink2.default, null),
            _react2.default.createElement(_UserSignInBtnGrp2.default, null)
        )
    );
};

var _default = NavBar;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(StyledTitleContainer, 'StyledTitleContainer', 'src/components/groups/NavBarSearch&Post.js');
    reactHotLoader.register(StyledSearchBarSearch, 'StyledSearchBarSearch', 'src/components/groups/NavBarSearch&Post.js');
    reactHotLoader.register(StyledSearchBarPage, 'StyledSearchBarPage', 'src/components/groups/NavBarSearch&Post.js');
    reactHotLoader.register(StyledStartSection, 'StyledStartSection', 'src/components/groups/NavBarSearch&Post.js');
    reactHotLoader.register(StyledMiddleSection, 'StyledMiddleSection', 'src/components/groups/NavBarSearch&Post.js');
    reactHotLoader.register(StyledEndSection, 'StyledEndSection', 'src/components/groups/NavBarSearch&Post.js');
    reactHotLoader.register(NavBar, 'NavBar', 'src/components/groups/NavBarSearch&Post.js');
    reactHotLoader.register(_default, 'default', 'src/components/groups/NavBarSearch&Post.js');
    leaveModule(module);
})();

;
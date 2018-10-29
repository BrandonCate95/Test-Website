'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['display:flex;flex-direction:column;flex:0 0 66.66667%;max-width:66.66667%;width:100%;margin:0 auto;'], ['display:flex;flex-direction:column;flex:0 0 66.66667%;max-width:66.66667%;width:100%;margin:0 auto;']),
    _templateObject2 = _taggedTemplateLiteral(['margin-bottom:20px !important;flex-wrap:wrap !important;&>div{margin:1.5% 0;}&>div:nth-child(3n-1){margin:1.5%;}'], ['margin-bottom:20px !important;flex-wrap:wrap !important;&>div{margin:1.5% 0;}&>div:nth-child(3n-1){margin:1.5%;}']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Tab = require('../../../components/mdc/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _UserPagePosts = require('./UserPagePosts');

var _UserPagePosts2 = _interopRequireDefault(_UserPagePosts);

var _ListUserPosts = require('../../../queries/components/ListUserPosts');

var _ListUserPosts2 = _interopRequireDefault(_ListUserPosts);

var _ListUserDrafts = require('../../../queries/components/ListUserDrafts');

var _ListUserDrafts2 = _interopRequireDefault(_ListUserDrafts);

var _UserPageDrafts = require('./UserPageDrafts');

var _UserPageDrafts2 = _interopRequireDefault(_UserPageDrafts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Column = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-15km15z-0'
})(_templateObject);

var StyledPanel = /*#__PURE__*/(0, _styledComponents2.default)(_Tab.Panel).withConfig({
    componentId: 'sc-15km15z-1'
})(_templateObject2);

var UserPageTabs = function UserPageTabs(_ref) {
    var userMatch = _ref.userMatch,
        draftEdit = _ref.draftEdit,
        userData = _ref.userData;
    return _react2.default.createElement(
        Column,
        null,
        _react2.default.createElement(
            _Tab2.default,
            null,
            _react2.default.createElement(
                _Tab.Navs,
                {
                    'tab-role': 'navs'
                },
                _react2.default.createElement(
                    _Tab.Nav,
                    { 'tab-role': 'nav' },
                    'Articles'
                ),
                userMatch && _react2.default.createElement(
                    _Tab.Nav,
                    { 'tab-role': 'nav' },
                    'Drafts'
                )
            ),
            _react2.default.createElement(
                _Tab.Panels,
                { 'tab-role': 'panels' },
                _react2.default.createElement(
                    StyledPanel,
                    { 'tab-role': 'panel' },
                    _react2.default.createElement(
                        _ListUserPosts2.default,
                        { identityId: userData.identityId },
                        _react2.default.createElement(_UserPagePosts2.default, {
                            logoImg: userData.logoImg,
                            username: userData.username
                        })
                    )
                ),
                userMatch && _react2.default.createElement(
                    StyledPanel,
                    { 'tab-role': 'panel' },
                    _react2.default.createElement(
                        _ListUserDrafts2.default,
                        null,
                        _react2.default.createElement(_UserPageDrafts2.default, {
                            logoImg: userData.logoImg,
                            username: userData.username,
                            draftEdit: draftEdit
                        })
                    )
                )
            )
        )
    );
};

var _default = UserPageTabs;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Column, 'Column', 'src/pages/UserPage/components/UserPageTabs.js');
    reactHotLoader.register(StyledPanel, 'StyledPanel', 'src/pages/UserPage/components/UserPageTabs.js');
    reactHotLoader.register(UserPageTabs, 'UserPageTabs', 'src/pages/UserPage/components/UserPageTabs.js');
    reactHotLoader.register(_default, 'default', 'src/pages/UserPage/components/UserPageTabs.js');
    leaveModule(module);
})();

;
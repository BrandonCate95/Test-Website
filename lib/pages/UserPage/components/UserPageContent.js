'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['margin:0px;margin-left:20px;font-size:calc(3vw + 3vh);line-height:0;font-family:Futura,Helvetica,sans-serif;font-weight:bold;text-align:center;display:flex;justify-content:center;align-content:center;flex-direction:column;color:#666666;'], ['margin:0px;margin-left:20px;font-size:calc(3vw + 3vh);line-height:0;font-family:Futura,Helvetica,sans-serif;font-weight:bold;text-align:center;display:flex;justify-content:center;align-content:center;flex-direction:column;color:#666666;']),
    _templateObject2 = _taggedTemplateLiteral(['display:flex;flex-direction:column;'], ['display:flex;flex-direction:column;']),
    _templateObject3 = _taggedTemplateLiteral(['display:flex;flex-direction:column;flex:0 0 66.66667%%;position:relative;max-width:66.66667%%;width:100%;margin:0 auto;'], ['display:flex;flex-direction:column;flex:0 0 66.66667%%;position:relative;max-width:66.66667%%;width:100%;margin:0 auto;']),
    _templateObject4 = _taggedTemplateLiteral(['display:flex;'], ['display:flex;']),
    _templateObject5 = _taggedTemplateLiteral(['display:flex;justify-content:center;margin-top:4em;'], ['display:flex;justify-content:center;margin-top:4em;']),
    _templateObject6 = _taggedTemplateLiteral(['display:flex;justify-content:center;margin:0;margin-top:1.5rem;font-size:22px !important;text-align:center;font-family:Futura,Helvetica,sans-serif;color:#666666;'], ['display:flex;justify-content:center;margin:0;margin-top:1.5rem;font-size:22px !important;text-align:center;font-family:Futura,Helvetica,sans-serif;color:#666666;']),
    _templateObject7 = _taggedTemplateLiteral(['display:flex;flex:0 0 100%;position:relative;max-width:100%;width:100%;'], ['display:flex;flex:0 0 100%;position:relative;max-width:100%;width:100%;']),
    _templateObject8 = _taggedTemplateLiteral(['height:80px;width:80px;border-radius:50%;'], ['height:80px;width:80px;border-radius:50%;']),
    _templateObject9 = _taggedTemplateLiteral(['display:flex;margin-top:4em;'], ['display:flex;margin-top:4em;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _OnLoadS3Image = require('../../../components/misc/OnLoadS3Image');

var _OnLoadS3Image2 = _interopRequireDefault(_OnLoadS3Image);

var _UserPageTabs = require('./UserPageTabs');

var _UserPageTabs2 = _interopRequireDefault(_UserPageTabs);

var _getKeyWithoutPrefix = require('../../../utilities/getKeyWithoutPrefix');

var _getKeyWithoutPrefix2 = _interopRequireDefault(_getKeyWithoutPrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledH4 = /*#__PURE__*/_styledComponents2.default.h4.withConfig({
    componentId: 'vh6al7-0'
})(_templateObject);

var Column = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'vh6al7-1'
})(_templateObject2);

var UserColumn = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'vh6al7-2'
})(_templateObject3);

var Row = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'vh6al7-3'
})(_templateObject4);

var UserMainRow = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'vh6al7-4'
})(_templateObject5);

var UserDescriptionContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'vh6al7-5'
})(_templateObject6);

var PageLogoContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'vh6al7-6'
})(_templateObject7);

var UserLogo = /*#__PURE__*/(0, _styledComponents2.default)(_OnLoadS3Image2.default).withConfig({
    componentId: 'vh6al7-7'
})(_templateObject8);

var TabsContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'vh6al7-8'
})(_templateObject9);

var UserPageContent = function UserPageContent(_ref) {
    var data = _ref.data,
        username = _ref.username,
        userMatch = _ref.userMatch;
    return _react2.default.createElement(
        Column,
        null,
        _react2.default.createElement(
            PageLogoContainer,
            { className: 'img-container--4-1' },
            _react2.default.createElement(_OnLoadS3Image2.default, {
                level: 'protected',
                identityId: data.identityId,
                imgKey: data.pageImg ? (0, _getKeyWithoutPrefix2.default)(data.pageImg.file.key) : '#'
            })
        ),
        _react2.default.createElement(
            Row,
            null,
            _react2.default.createElement(
                UserColumn,
                null,
                _react2.default.createElement(
                    UserMainRow,
                    null,
                    _react2.default.createElement(UserLogo, {
                        level: 'protected',
                        identityId: data.identityId,
                        imgKey: data.logoImg ? (0, _getKeyWithoutPrefix2.default)(data.logoImg.file.key) : '#'
                    }),
                    _react2.default.createElement(
                        StyledH4,
                        null,
                        username
                    )
                ),
                _react2.default.createElement(
                    UserDescriptionContainer,
                    null,
                    data.description
                )
            )
        ),
        _react2.default.createElement(
            TabsContainer,
            null,
            _react2.default.createElement(_UserPageTabs2.default, { draftEdit: false, userMatch: userMatch, username: username, userData: data })
        )
    );
};

var _default = UserPageContent;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(StyledH4, 'StyledH4', 'src/pages/UserPage/components/UserPageContent.js');
    reactHotLoader.register(Column, 'Column', 'src/pages/UserPage/components/UserPageContent.js');
    reactHotLoader.register(UserColumn, 'UserColumn', 'src/pages/UserPage/components/UserPageContent.js');
    reactHotLoader.register(Row, 'Row', 'src/pages/UserPage/components/UserPageContent.js');
    reactHotLoader.register(UserMainRow, 'UserMainRow', 'src/pages/UserPage/components/UserPageContent.js');
    reactHotLoader.register(UserDescriptionContainer, 'UserDescriptionContainer', 'src/pages/UserPage/components/UserPageContent.js');
    reactHotLoader.register(PageLogoContainer, 'PageLogoContainer', 'src/pages/UserPage/components/UserPageContent.js');
    reactHotLoader.register(UserLogo, 'UserLogo', 'src/pages/UserPage/components/UserPageContent.js');
    reactHotLoader.register(TabsContainer, 'TabsContainer', 'src/pages/UserPage/components/UserPageContent.js');
    reactHotLoader.register(UserPageContent, 'UserPageContent', 'src/pages/UserPage/components/UserPageContent.js');
    reactHotLoader.register(_default, 'default', 'src/pages/UserPage/components/UserPageContent.js');
    leaveModule(module);
})();

;
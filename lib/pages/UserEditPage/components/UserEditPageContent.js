'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['margin:0px;margin-left:20px;font-size:calc(5vw + 1vh);line-height:0;font-family:Futura,Helvetica,sans-serif;font-weight:bold;text-align:center;display:flex;justify-content:center;align-content:center;flex-direction:column;color:#666666;'], ['margin:0px;margin-left:20px;font-size:calc(5vw + 1vh);line-height:0;font-family:Futura,Helvetica,sans-serif;font-weight:bold;text-align:center;display:flex;justify-content:center;align-content:center;flex-direction:column;color:#666666;']),
    _templateObject2 = _taggedTemplateLiteral(['margin:0 !important;margin-top:1.5rem !important;font-size:22px !important;text-align:center;font-family:Futura,Helvetica,sans-serif;color:#666666;'], ['margin:0 !important;margin-top:1.5rem !important;font-size:22px !important;text-align:center;font-family:Futura,Helvetica,sans-serif;color:#666666;']),
    _templateObject3 = _taggedTemplateLiteral(['display:flex;flex-direction:column;'], ['display:flex;flex-direction:column;']),
    _templateObject4 = _taggedTemplateLiteral(['display:flex;flex-direction:column;flex:0 0 66.66667%%;position:relative;max-width:66.66667%%;width:100%;margin:0 auto;'], ['display:flex;flex-direction:column;flex:0 0 66.66667%%;position:relative;max-width:66.66667%%;width:100%;margin:0 auto;']),
    _templateObject5 = _taggedTemplateLiteral(['display:flex;'], ['display:flex;']),
    _templateObject6 = _taggedTemplateLiteral(['display:flex;justify-content:center;margin-top:4em;'], ['display:flex;justify-content:center;margin-top:4em;']),
    _templateObject7 = _taggedTemplateLiteral(['display:flex;justify-content:center;margin:0;margin-top:1.5rem;font-size:22px !important;text-align:center;font-family:Futura,Helvetica,sans-serif;color:#666666;'], ['display:flex;justify-content:center;margin:0;margin-top:1.5rem;font-size:22px !important;text-align:center;font-family:Futura,Helvetica,sans-serif;color:#666666;']),
    _templateObject8 = _taggedTemplateLiteral(['display:flex;flex:0 0 100%;position:relative;max-width:100%;width:100%;'], ['display:flex;flex:0 0 100%;position:relative;max-width:100%;width:100%;']),
    _templateObject9 = _taggedTemplateLiteral(['display:flex;margin-top:4em;'], ['display:flex;margin-top:4em;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _UserEditPageMainImgEditor = require('./UserEditPageMainImgEditor');

var _UserEditPageMainImgEditor2 = _interopRequireDefault(_UserEditPageMainImgEditor);

var _UserEditPageLogoImgEditor = require('./UserEditPageLogoImgEditor');

var _UserEditPageLogoImgEditor2 = _interopRequireDefault(_UserEditPageLogoImgEditor);

var _AutoHeightTextArea = require('../../../components/inputs/AutoHeightTextArea');

var _AutoHeightTextArea2 = _interopRequireDefault(_AutoHeightTextArea);

var _UserPageTabs = require('../../UserPage/components/UserPageTabs');

var _UserPageTabs2 = _interopRequireDefault(_UserPageTabs);

var _UpdateUserImg = require('../../../mutations/components/UpdateUserImg');

var _UpdateUserImg2 = _interopRequireDefault(_UpdateUserImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledH4 = /*#__PURE__*/_styledComponents2.default.h4.withConfig({
    componentId: 'rmo711-0'
})(_templateObject);

var StyledAutoHeightTextArea = /*#__PURE__*/(0, _styledComponents2.default)(_AutoHeightTextArea2.default).withConfig({
    componentId: 'rmo711-1'
})(_templateObject2);

var Column = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'rmo711-2'
})(_templateObject3);

var UserColumn = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'rmo711-3'
})(_templateObject4);

var Row = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'rmo711-4'
})(_templateObject5);

var UserMainRow = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'rmo711-5'
})(_templateObject6);

var UserDescriptionContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'rmo711-6'
})(_templateObject7);

var PageLogoContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'rmo711-7'
})(_templateObject8);

var TabsContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'rmo711-8'
})(_templateObject9);

var UserPageEditContent = function UserPageEditContent(_ref) {
    var mainImgModel = _ref.mainImgModel,
        handleMainImgModelChange = _ref.handleMainImgModelChange,
        logoImgModel = _ref.logoImgModel,
        handleLogoImgModelChange = _ref.handleLogoImgModelChange,
        username = _ref.username,
        description = _ref.description,
        handleInputChange = _ref.handleInputChange,
        userMatch = _ref.userMatch,
        userData = _ref.userData,
        formatImgFile = _ref.formatImgFile;
    return _react2.default.createElement(
        Column,
        null,
        _react2.default.createElement(
            PageLogoContainer,
            { className: 'img-container--4-1' },
            _react2.default.createElement(
                _UpdateUserImg2.default,
                null,
                _react2.default.createElement(_UserEditPageMainImgEditor2.default, {
                    model: mainImgModel,
                    handleModelChange: handleMainImgModelChange,
                    formatImgFile: formatImgFile
                })
            )
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
                    _react2.default.createElement(
                        _UpdateUserImg2.default,
                        null,
                        _react2.default.createElement(_UserEditPageLogoImgEditor2.default, {
                            model: logoImgModel,
                            handleModelChange: handleLogoImgModelChange,
                            formatImgFile: formatImgFile
                        })
                    ),
                    _react2.default.createElement(
                        StyledH4,
                        null,
                        username
                    )
                ),
                _react2.default.createElement(
                    UserDescriptionContainer,
                    null,
                    _react2.default.createElement(StyledAutoHeightTextArea, {
                        id: 'description-textarea',
                        name: 'description',
                        value: description,
                        handleTextAreaChange: handleInputChange,
                        placeholder: 'Your description...'
                    })
                )
            )
        ),
        _react2.default.createElement(
            TabsContainer,
            null,
            _react2.default.createElement(_UserPageTabs2.default, { draftEdit: true, userMatch: userMatch, username: username, userData: userData })
        )
    );
};

var _default = UserPageEditContent;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(StyledH4, 'StyledH4', 'src/pages/UserEditPage/components/UserEditPageContent.js');
    reactHotLoader.register(StyledAutoHeightTextArea, 'StyledAutoHeightTextArea', 'src/pages/UserEditPage/components/UserEditPageContent.js');
    reactHotLoader.register(Column, 'Column', 'src/pages/UserEditPage/components/UserEditPageContent.js');
    reactHotLoader.register(UserColumn, 'UserColumn', 'src/pages/UserEditPage/components/UserEditPageContent.js');
    reactHotLoader.register(Row, 'Row', 'src/pages/UserEditPage/components/UserEditPageContent.js');
    reactHotLoader.register(UserMainRow, 'UserMainRow', 'src/pages/UserEditPage/components/UserEditPageContent.js');
    reactHotLoader.register(UserDescriptionContainer, 'UserDescriptionContainer', 'src/pages/UserEditPage/components/UserEditPageContent.js');
    reactHotLoader.register(PageLogoContainer, 'PageLogoContainer', 'src/pages/UserEditPage/components/UserEditPageContent.js');
    reactHotLoader.register(TabsContainer, 'TabsContainer', 'src/pages/UserEditPage/components/UserEditPageContent.js');
    reactHotLoader.register(UserPageEditContent, 'UserPageEditContent', 'src/pages/UserEditPage/components/UserEditPageContent.js');
    reactHotLoader.register(_default, 'default', 'src/pages/UserEditPage/components/UserEditPageContent.js');
    leaveModule(module);
})();

;
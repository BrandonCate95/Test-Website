'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['display:flex;align-items:center;height:100%;padding-left:24px !important;padding-right:12px !important;overflow:auto !important;'], ['display:flex;align-items:center;height:100%;padding-left:24px !important;padding-right:12px !important;overflow:auto !important;']),
    _templateObject2 = _taggedTemplateLiteral(['padding:8px 0px !important;flex:0 0 25% !important;.mdc-icon-button.material-icons{padding:0px 0px !important;}'], ['padding:8px 0px !important;flex:0 0 25% !important;.mdc-icon-button.material-icons{padding:0px 0px !important;}']),
    _templateObject3 = _taggedTemplateLiteral(['padding:8px 0px !important;flex:0 0 50% !important;justify-content:center;'], ['padding:8px 0px !important;flex:0 0 50% !important;justify-content:center;']),
    _templateObject4 = _taggedTemplateLiteral(['padding:8px 0px !important;flex:0 0 25% !important;'], ['padding:8px 0px !important;flex:0 0 25% !important;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UserSignInBtnGrp = require('../../../components/groups/UserSignInBtnGrp');

var _UserSignInBtnGrp2 = _interopRequireDefault(_UserSignInBtnGrp);

var _AddPostPageNewPagePopup = require('./AddPostPageNewPagePopup');

var _AddPostPageNewPagePopup2 = _interopRequireDefault(_AddPostPageNewPagePopup);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _AddPostPageSaveDraftBtn = require('./AddPostPageSaveDraftBtn');

var _AddPostPageSaveDraftBtn2 = _interopRequireDefault(_AddPostPageSaveDraftBtn);

var _GetPost = require('../../../queries/components/GetPost');

var _GetPost2 = _interopRequireDefault(_GetPost);

var _PostCRUDPopups = require('../../../components/groups/PostCRUDPopups');

var _PostCRUDPopups2 = _interopRequireDefault(_PostCRUDPopups);

var _NavBar = require('../../../components/mdc/NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _NavBarHomeLink = require('../../../components/links/NavBarHomeLink');

var _NavBarHomeLink2 = _interopRequireDefault(_NavBarHomeLink);

var _TitleScrollShow = require('../../../components/misc/TitleScrollShow');

var _TitleScrollShow2 = _interopRequireDefault(_TitleScrollShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTitleContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1ehikhp-0'
})(_templateObject);

var StyledStartSection = /*#__PURE__*/(0, _styledComponents2.default)(_NavBar.StartSection).withConfig({
    componentId: 'sc-1ehikhp-1'
})(_templateObject2);

var StyledMiddleSection = /*#__PURE__*/(0, _styledComponents2.default)(_NavBar.MiddleSection).withConfig({
    componentId: 'sc-1ehikhp-2'
})(_templateObject3);

var StyledEndSection = /*#__PURE__*/(0, _styledComponents2.default)(_NavBar.EndSection).withConfig({
    componentId: 'sc-1ehikhp-3'
})(_templateObject4);

var AddPostPageNavBar = function AddPostPageNavBar(props) {
    return _react2.default.createElement(
        _NavBar2.default,
        {
            fixed: true,
            dense: true
        },
        _react2.default.createElement(
            StyledStartSection,
            null,
            _react2.default.createElement(
                StyledTitleContainer,
                { className: 'mdc-top-app-bar__title' },
                _react2.default.createElement(_NavBarHomeLink2.default, {
                    className: 'mdc-typography--headline6'
                })
            ),
            _react2.default.createElement(_AddPostPageSaveDraftBtn2.default, {
                draftData: props.uploadData,
                setPostId: props.setPostId,
                updateDraftMutation: props.updateDraftMutation
            }),
            _react2.default.createElement(_AddPostPageNewPagePopup2.default, {
                handleNewPage: props.handleNewPage
            }),
            _react2.default.createElement(
                _GetPost2.default,
                {
                    postId: props.postId
                },
                _react2.default.createElement(_PostCRUDPopups2.default, {
                    postId: props.postId,
                    loadData: props.uploadData
                })
            )
        ),
        _react2.default.createElement(
            StyledMiddleSection,
            null,
            _react2.default.createElement(
                _TitleScrollShow2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'mdc-typography--headline5' },
                    props.title
                )
            )
        ),
        _react2.default.createElement(
            StyledEndSection,
            null,
            _react2.default.createElement(_UserSignInBtnGrp2.default, null)
        )
    );
};

var AddPostPageNavBarWithQuery = function AddPostPageNavBarWithQuery(props) {
    return _react2.default.createElement(
        _GetPost2.default,
        {
            postId: props.postId
        },
        _react2.default.createElement(AddPostPageNavBar, props)
    );
};

var _default = AddPostPageNavBarWithQuery;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(StyledTitleContainer, 'StyledTitleContainer', 'src/pages/AddPostPage/components/AddPostPageNavBar.js');
    reactHotLoader.register(StyledStartSection, 'StyledStartSection', 'src/pages/AddPostPage/components/AddPostPageNavBar.js');
    reactHotLoader.register(StyledMiddleSection, 'StyledMiddleSection', 'src/pages/AddPostPage/components/AddPostPageNavBar.js');
    reactHotLoader.register(StyledEndSection, 'StyledEndSection', 'src/pages/AddPostPage/components/AddPostPageNavBar.js');
    reactHotLoader.register(AddPostPageNavBar, 'AddPostPageNavBar', 'src/pages/AddPostPage/components/AddPostPageNavBar.js');
    reactHotLoader.register(AddPostPageNavBarWithQuery, 'AddPostPageNavBarWithQuery', 'src/pages/AddPostPage/components/AddPostPageNavBar.js');
    reactHotLoader.register(_default, 'default', 'src/pages/AddPostPage/components/AddPostPageNavBar.js');
    leaveModule(module);
})();

;
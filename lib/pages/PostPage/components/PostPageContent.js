'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['display:flex;flex:0 0 50%;position:relative;max-width:50%;width:100%;flex-direction:column;margin:0 auto;'], ['display:flex;flex:0 0 50%;position:relative;max-width:50%;width:100%;flex-direction:column;margin:0 auto;']),
    _templateObject2 = _taggedTemplateLiteral(['margin:20px 0;'], ['margin:20px 0;']),
    _templateObject3 = _taggedTemplateLiteral(['position:relative;div{position:static !important;}'], ['position:relative;div{position:static !important;}']),
    _templateObject4 = _taggedTemplateLiteral(['& > div{font-size:24px;font-family:Futura,"Trebuchet MS",Arial,sans-serif;color:rgb(73,73,73);text-align:left;}img{width:auto;margin:5px auto;display:block;float:none;vertical-align:top;cursor:pointer;position:relative;max-width:100%;}p > div{margin:0 auto;}'], ['& > div{font-size:24px;font-family:Futura,"Trebuchet MS",Arial,sans-serif;color:rgb(73,73,73);text-align:left;}img{width:auto;margin:5px auto;display:block;float:none;vertical-align:top;cursor:pointer;position:relative;max-width:100%;}p > div{margin:0 auto;}']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _AuthorTag = require('../../../components/groups/AuthorTag');

var _AuthorTag2 = _interopRequireDefault(_AuthorTag);

var _S3Image = require('../../../components/aws-amplify-react/S3Image');

var _S3Image2 = _interopRequireDefault(_S3Image);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Spinner = require('../../../components/misc/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Loading = function Loading() {
    return _react2.default.createElement(
        'div',
        { style: { position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" } },
        _react2.default.createElement(_Spinner2.default, { primary: true })
    );
};

var JsxParser = typeof window !== 'undefined' ? (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('react-jsx-parser'));
        });
    },
    modules: ['react-jsx-parser'],
    webpack: function webpack() {
        return [require.resolveWeak('react-jsx-parser')];
    },
    loading: Loading
}) : function () {
    return _react2.default.createElement('div', null);
};

var MainCol = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1fuplxh-0'
})(_templateObject);

var MainTitle = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1fuplxh-1'
})(_templateObject2);

var StyledMainImgContainer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1fuplxh-2'
})(_templateObject3);

var StyledDiv = /*#__PURE__*/_styledComponents2.default.div.withConfig({
    componentId: 'sc-1fuplxh-3'
})(_templateObject4);

var PostPageContent = function PostPageContent(_ref) {
    var title = _ref.title,
        identityId = _ref.identityId,
        userData = _ref.userData,
        imgKey = _ref.imgKey,
        imgClass = _ref.imgClass,
        content = _ref.content;
    return _react2.default.createElement(
        MainCol,
        null,
        _react2.default.createElement(
            MainTitle,
            { className: 'mdc-typography--headline2' },
            title
        ),
        _react2.default.createElement(_AuthorTag2.default, {
            identityId: identityId,
            author: userData.username,
            data: userData
        }),
        _react2.default.createElement(
            StyledMainImgContainer,
            { className: 'img-container--16-9' },
            _react2.default.createElement(_S3Image2.default, {
                identityId: identityId,
                level: 'protected',
                imgKey: imgKey,
                className: imgClass
            })
        ),
        _react2.default.createElement(
            StyledDiv,
            { className: 'custom-theme fr-box fr-basic' },
            _react2.default.createElement(
                'div',
                { className: 'fr-element fr-view' },
                _react2.default.createElement(JsxParser, {
                    className: 'fr-element',
                    components: { S3Image: _S3Image2.default },
                    jsx: content
                })
            )
        )
    );
};

var _default = PostPageContent;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Loading, 'Loading', 'src/pages/PostPage/components/PostPageContent.js');
    reactHotLoader.register(JsxParser, 'JsxParser', 'src/pages/PostPage/components/PostPageContent.js');
    reactHotLoader.register(MainCol, 'MainCol', 'src/pages/PostPage/components/PostPageContent.js');
    reactHotLoader.register(MainTitle, 'MainTitle', 'src/pages/PostPage/components/PostPageContent.js');
    reactHotLoader.register(StyledMainImgContainer, 'StyledMainImgContainer', 'src/pages/PostPage/components/PostPageContent.js');
    reactHotLoader.register(StyledDiv, 'StyledDiv', 'src/pages/PostPage/components/PostPageContent.js');
    reactHotLoader.register(PostPageContent, 'PostPageContent', 'src/pages/PostPage/components/PostPageContent.js');
    reactHotLoader.register(_default, 'default', 'src/pages/PostPage/components/PostPageContent.js');
    leaveModule(module);
})();

;
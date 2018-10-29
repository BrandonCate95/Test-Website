'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Spinner = require('../../../components/misc/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Loading = function Loading() {
    return _react2.default.createElement(
        'div',
        { style: { position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" } },
        _react2.default.createElement(_Spinner2.default, { large: true, primary: true })
    );
};

var VerticalCard = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('../../../components/groups/VerticalCard'));
        });
    },
    modules: ['../../../components/groups/VerticalCard'],
    webpack: function webpack() {
        return [require.resolveWeak('../../../components/groups/VerticalCard')];
    },
    loading: Loading
});

var UserPagePosts = function UserPagePosts(_ref) {
    var data = _ref.data,
        logoImg = _ref.logoImg,
        username = _ref.username,
        identityId = _ref.identityId;
    return data.listUserPosts.posts.map(function (post) {
        return _react2.default.createElement(VerticalCard, {
            key: post.postId,
            postId: post.postId,
            title: post.title,
            imgKey: post.imgKey,
            logoImg: logoImg,
            username: username,
            identityId: identityId,
            drafts: false,
            draftEdit: false
        });
    });
};

var _default = UserPagePosts;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Loading, 'Loading', 'src/pages/UserPage/components/UserPagePosts.js');
    reactHotLoader.register(VerticalCard, 'VerticalCard', 'src/pages/UserPage/components/UserPagePosts.js');
    reactHotLoader.register(UserPagePosts, 'UserPagePosts', 'src/pages/UserPage/components/UserPagePosts.js');
    reactHotLoader.register(_default, 'default', 'src/pages/UserPage/components/UserPagePosts.js');
    leaveModule(module);
})();

;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavPageTemplate = require('../../../components/groups/NavPageTemplate');

var _NavPageTemplate2 = _interopRequireDefault(_NavPageTemplate);

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
        _react2.default.createElement(_Spinner2.default, { primary: true })
    );
};

var NavBar = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('../../../components/groups/NavBarSearch&Post'));
        });
    },
    modules: ['../../../components/groups/NavBarSearch&Post'],
    webpack: function webpack() {
        return [require.resolveWeak('../../../components/groups/NavBarSearch&Post')];
    },
    loading: Loading
});

var PostPageSideBarContent = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('./PostPageSideBarContent'));
        });
    },
    modules: ['./PostPageSideBarContent'],
    webpack: function webpack() {
        return [require.resolveWeak('./PostPageSideBarContent')];
    },
    loading: Loading
});

var PostPageContent = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('./PostPageContent'));
        });
    },
    modules: ['./PostPageContent'],
    webpack: function webpack() {
        return [require.resolveWeak('./PostPageContent')];
    },
    loading: Loading
});

var PostPageWithQuery = function PostPageWithQuery(_ref) {
    var data = _ref.data;
    return _react2.default.createElement(
        _NavPageTemplate2.default,
        {
            navBarType: 'post',
            sideBarInitialOpen: false
        },
        _react2.default.createElement(
            _NavPageTemplate.NavBarContainer,
            {
                'navpage-role': 'navbar'
            },
            _react2.default.createElement(NavBar, {
                title: data.getESPost.title
            })
        ),
        _react2.default.createElement(
            _NavPageTemplate.SideBarContainer,
            {
                'navpage-role': 'sidebar'
            },
            _react2.default.createElement(PostPageSideBarContent, null)
        ),
        _react2.default.createElement(
            _NavPageTemplate.PageContentContainer,
            {
                'navpage-role': 'page-content'
            },
            _react2.default.createElement(PostPageContent, data.getESPost)
        )
    );
};

var _default = PostPageWithQuery;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Loading, 'Loading', 'src/pages/PostPage/components/PostPageWithQuery.js');
    reactHotLoader.register(NavBar, 'NavBar', 'src/pages/PostPage/components/PostPageWithQuery.js');
    reactHotLoader.register(PostPageSideBarContent, 'PostPageSideBarContent', 'src/pages/PostPage/components/PostPageWithQuery.js');
    reactHotLoader.register(PostPageContent, 'PostPageContent', 'src/pages/PostPage/components/PostPageWithQuery.js');
    reactHotLoader.register(PostPageWithQuery, 'PostPageWithQuery', 'src/pages/PostPage/components/PostPageWithQuery.js');
    reactHotLoader.register(_default, 'default', 'src/pages/PostPage/components/PostPageWithQuery.js');
    leaveModule(module);
})();

;
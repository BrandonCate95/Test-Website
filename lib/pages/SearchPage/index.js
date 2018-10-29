'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SearchPageResults = require('./components/SearchPageResults');

var _SearchPageResults2 = _interopRequireDefault(_SearchPageResults);

var _SearchPageSideBarContent = require('./components/SearchPageSideBarContent');

var _SearchPageSideBarContent2 = _interopRequireDefault(_SearchPageSideBarContent);

var _NavPageTemplate = require('../../components/groups/NavPageTemplate');

var _NavPageTemplate2 = _interopRequireDefault(_NavPageTemplate);

var _SearchContent = require('../../queries/components/SearchContent');

var _SearchContent2 = _interopRequireDefault(_SearchContent);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _Spinner = require('../../components/misc/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
// import NavBar from '../../components/groups/NavBarSearch&Post'


var Loading = function Loading() {
    return _react2.default.createElement(_Spinner2.default, { primary: true });
};

var NavBar = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(require('../../components/groups/NavBarSearch&Post'));
        });
    },
    modules: ['../../components/groups/NavBarSearch&Post'],
    webpack: function webpack() {
        return [require.resolveWeak('../../components/groups/NavBarSearch&Post')];
    },
    loading: Loading
});

var SearchPage = function SearchPage(_ref) {
    var location = _ref.location;
    return _react2.default.createElement(
        _NavPageTemplate2.default,
        {
            navBarType: 'search',
            sideBarInitialOpen: true
        },
        _react2.default.createElement(
            _NavPageTemplate.NavBarContainer,
            {
                'navpage-role': 'navbar'
            },
            _react2.default.createElement(NavBar, null)
        ),
        _react2.default.createElement(
            _NavPageTemplate.SideBarContainer,
            {
                'navpage-role': 'sidebar'
            },
            _react2.default.createElement(_SearchPageSideBarContent2.default, { search: location.search })
        ),
        _react2.default.createElement(
            _NavPageTemplate.PageContentContainer,
            {
                'navpage-role': 'page-content'
            },
            _react2.default.createElement(
                _SearchContent2.default,
                { search: location.search.replace('?q=', '') },
                _react2.default.createElement(_SearchPageResults2.default, null)
            )
        )
    );
};

var _default = SearchPage;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Loading, 'Loading', 'src/pages/SearchPage/index.js');
    reactHotLoader.register(NavBar, 'NavBar', 'src/pages/SearchPage/index.js');
    reactHotLoader.register(SearchPage, 'SearchPage', 'src/pages/SearchPage/index.js');
    reactHotLoader.register(_default, 'default', 'src/pages/SearchPage/index.js');
    leaveModule(module);
})();

;
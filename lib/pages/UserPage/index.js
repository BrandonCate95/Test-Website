'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _UserPageContent = require('./components/UserPageContent');

var _UserPageContent2 = _interopRequireDefault(_UserPageContent);

var _UserPageSideBarContent = require('./components/UserPageSideBarContent');

var _UserPageSideBarContent2 = _interopRequireDefault(_UserPageSideBarContent);

var _NavPageTemplate = require('../../components/groups/NavPageTemplate');

var _NavPageTemplate2 = _interopRequireDefault(_NavPageTemplate);

var _NavBarSearchPost = require('../../components/groups/NavBarSearch&Post');

var _NavBarSearchPost2 = _interopRequireDefault(_NavBarSearchPost);

var _GetUserByUsername = require('../../queries/components/GetUserByUsername');

var _GetUserByUsername2 = _interopRequireDefault(_GetUserByUsername);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var UserPage = function UserPage(_ref) {
    var match = _ref.match,
        username = _ref.username;
    return _react2.default.createElement(
        _NavPageTemplate2.default,
        {
            navBarType: 'search',
            sideBarInitialOpen: match.params.user === username
        },
        _react2.default.createElement(
            _NavPageTemplate.NavBarContainer,
            {
                'navpage-role': 'navbar'
            },
            _react2.default.createElement(_NavBarSearchPost2.default, null)
        ),
        _react2.default.createElement(
            _NavPageTemplate.SideBarContainer,
            {
                'navpage-role': 'sidebar'
            },
            _react2.default.createElement(_UserPageSideBarContent2.default, {
                userMatch: match.params.user === username,
                user: match.params.user
            })
        ),
        _react2.default.createElement(
            _NavPageTemplate.PageContentContainer,
            {
                'navpage-role': 'page-content'
            },
            _react2.default.createElement(
                _GetUserByUsername2.default,
                { username: match.params.user },
                _react2.default.createElement(_UserPageContent2.default, {
                    userMatch: match.params.user === username,
                    username: match.params.user
                })
            )
        )
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        username: state.user.username
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(UserPage);

exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(UserPage, 'UserPage', 'src/pages/UserPage/index.js');
    reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'src/pages/UserPage/index.js');
    reactHotLoader.register(_default, 'default', 'src/pages/UserPage/index.js');
    leaveModule(module);
})();

;
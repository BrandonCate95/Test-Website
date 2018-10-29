'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SignInLinkWithRouter = require('../links/SignInLinkWithRouter');

var _SignInLinkWithRouter2 = _interopRequireDefault(_SignInLinkWithRouter);

var _SignUpLinkWithRouter = require('../links/SignUpLinkWithRouter');

var _SignUpLinkWithRouter2 = _interopRequireDefault(_SignUpLinkWithRouter);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CodeVerifyLink = require('../links/CodeVerifyLink');

var _CodeVerifyLink2 = _interopRequireDefault(_CodeVerifyLink);

var _reactRedux = require('react-redux');

var _UserProfileMenu = require('../menus/UserProfileMenu');

var _UserProfileMenu2 = _interopRequireDefault(_UserProfileMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var UserSignInBtnGrp = function UserSignInBtnGrp(props) {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        !props.authenticated && _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(_SignInLinkWithRouter2.default, null),
            _react2.default.createElement(_SignUpLinkWithRouter2.default, null)
        ),
        props.authenticated && _react2.default.createElement(
            _react2.default.Fragment,
            null,
            !props.emailVerified && _react2.default.createElement(_CodeVerifyLink2.default, null),
            _react2.default.createElement(_UserProfileMenu2.default, {
                username: props.username
            })
        )
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated,
        username: state.user.username,
        emailVerified: state.user.emailVerified
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(UserSignInBtnGrp);

exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(UserSignInBtnGrp, 'UserSignInBtnGrp', 'src/components/groups/UserSignInBtnGrp.js');
    reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'src/components/groups/UserSignInBtnGrp.js');
    reactHotLoader.register(_default, 'default', 'src/components/groups/UserSignInBtnGrp.js');
    leaveModule(module);
})();

;
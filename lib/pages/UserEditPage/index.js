'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GetUserByUsername = require('../../queries/components/GetUserByUsername');

var _GetUserByUsername2 = _interopRequireDefault(_GetUserByUsername);

var _UserEditPageWithQuery = require('./components/UserEditPageWithQuery');

var _UserEditPageWithQuery2 = _interopRequireDefault(_UserEditPageWithQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var UserPageEditContainer = function UserPageEditContainer(props) {
    return _react2.default.createElement(
        _GetUserByUsername2.default,
        { username: props.match.params.user },
        _react2.default.createElement(_UserEditPageWithQuery2.default, {
            user: props.match.params.user
        })
    );
};

var _default = UserPageEditContainer;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(UserPageEditContainer, 'UserPageEditContainer', 'src/pages/UserEditPage/index.js');
    reactHotLoader.register(_default, 'default', 'src/pages/UserEditPage/index.js');
    leaveModule(module);
})();

;
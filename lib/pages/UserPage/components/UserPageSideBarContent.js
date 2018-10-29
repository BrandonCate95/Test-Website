'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Link2 = require('react-router-dom/Link');

var _Link3 = _interopRequireDefault(_Link2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var UserPageSideBarContent = function UserPageSideBarContent(_ref) {
    var userMatch = _ref.userMatch,
        user = _ref.user;
    return userMatch && _react2.default.createElement(
        _Link3.default,
        { to: '/' + user + '/edit', className: 'mdc-list-item mdc-theme-neutral' },
        'Edit Page'
    );
};

var _default = UserPageSideBarContent;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(UserPageSideBarContent, 'UserPageSideBarContent', 'src/pages/UserPage/components/UserPageSideBarContent.js');
    reactHotLoader.register(_default, 'default', 'src/pages/UserPage/components/UserPageSideBarContent.js');
    leaveModule(module);
})();

;
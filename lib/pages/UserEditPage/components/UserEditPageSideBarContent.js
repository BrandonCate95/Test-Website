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

var _Button = require('../../../components/mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

var _UpdateUserAttributes = require('../../../mutations/components/UpdateUserAttributes');

var _UpdateUserAttributes2 = _interopRequireDefault(_UpdateUserAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var UserPageEditSideBarContent = function UserPageEditSideBarContent(_ref) {
    var userMatch = _ref.userMatch,
        user = _ref.user,
        updateUserAttributesMutation = _ref.updateUserAttributesMutation,
        userInput = _ref.userInput,
        loading = _ref.loading;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        userMatch && _react2.default.createElement(
            _Link3.default,
            { to: '/' + user, className: 'mdc-list-item mdc-theme-neutral--color' },
            'Back'
        ),
        _react2.default.createElement(
            _Button2.default,
            {
                onClick: function onClick() {
                    return updateUserAttributesMutation({ description: userInput.description });
                },
                style: { width: "100%" },
                className: 'mdc-list-item mdc-theme-neutral--color',
                loading: loading
            },
            'Submit Changes'
        )
    );
};

var ContentWithMutation = function ContentWithMutation(props) {
    return _react2.default.createElement(
        _UpdateUserAttributes2.default,
        null,
        _react2.default.createElement(UserPageEditSideBarContent, props)
    );
};

var _default = ContentWithMutation;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(UserPageEditSideBarContent, 'UserPageEditSideBarContent', 'src/pages/UserEditPage/components/UserEditPageSideBarContent.js');
    reactHotLoader.register(ContentWithMutation, 'ContentWithMutation', 'src/pages/UserEditPage/components/UserEditPageSideBarContent.js');
    reactHotLoader.register(_default, 'default', 'src/pages/UserEditPage/components/UserEditPageSideBarContent.js');
    leaveModule(module);
})();

;
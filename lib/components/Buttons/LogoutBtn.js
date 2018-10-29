'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = require('react-redux');

var _actions = require('../../actions/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var LogoutBtn = function LogoutBtn(props) {
    return _react2.default.createElement(
        _Button2.default,
        _extends({
            onClick: props.userLogout
        }, props),
        'Logout'
    );
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        userLogout: function userLogout() {
            dispatch((0, _actions.userLogout)());
        }
    };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(LogoutBtn);

exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(LogoutBtn, 'LogoutBtn', 'src/components/Buttons/LogoutBtn.js');
    reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'src/components/Buttons/LogoutBtn.js');
    reactHotLoader.register(_default, 'default', 'src/components/Buttons/LogoutBtn.js');
    leaveModule(module);
})();

;
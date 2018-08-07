define(['exports', 'babel-runtime/helpers/extends', 'react', 'prop-types', '../mdc/Button', 'react-redux', '../../actions/actions'], function (exports, _extends2, _react, _propTypes, _Button, _reactRedux, _actions) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _extends3 = _interopRequireDefault(_extends2);

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    var _Button2 = _interopRequireDefault(_Button);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var LogoutBtn = function LogoutBtn(props) {
        return _react2.default.createElement(
            _Button2.default,
            (0, _extends3.default)({
                onClick: props.userLogout
            }, props),
            'Logout'
        );
    };

    LogoutBtn.propTypes = {
        userLogout: _propTypes2.default.func.isRequired
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            userLogout: function userLogout() {
                dispatch((0, _actions.userLogout)());
            }
        };
    };

    exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(LogoutBtn);
});
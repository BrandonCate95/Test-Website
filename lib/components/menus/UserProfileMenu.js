'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['font-size:36px !important;margin:0 14px 0 0 !important;height:auto !important;pointer-events:none;'], ['font-size:36px !important;margin:0 14px 0 0 !important;height:auto !important;pointer-events:none;']),
    _templateObject2 = _taggedTemplateLiteral(['font-size:28px !important;margin:0 !important;height:auto !important;pointer-events:none;'], ['font-size:28px !important;margin:0 !important;height:auto !important;pointer-events:none;']),
    _templateObject3 = _taggedTemplateLiteral(['button{padding:0 !important;&::before,&::after{background-color:transparent !important;}}'], ['button{padding:0 !important;&::before,&::after{background-color:transparent !important;}}']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _LogoutBtn = require('../Buttons/LogoutBtn');

var _LogoutBtn2 = _interopRequireDefault(_LogoutBtn);

var _Button = require('../mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Menu = require('../mdc/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledIcon = /*#__PURE__*/_styledComponents2.default.i.withConfig({
    componentId: 'ms3ahu-0'
})(_templateObject);

var StyledToggleIcon = /*#__PURE__*/_styledComponents2.default.i.withConfig({
    componentId: 'ms3ahu-1'
})(_templateObject2);

var StyledButton = /*#__PURE__*/(0, _styledComponents2.default)(_Button2.default).withConfig({
    componentId: 'ms3ahu-2'
})(_templateObject3);

var UserProfileMenu = function UserProfileMenu(props) {
    return _react2.default.createElement(
        _Menu2.default,
        {
            closeMenu: function closeMenu(evt) {
                var btn = evt.target.parentNode.children[0].children[0];
                btn.setAttribute("aria-pressed", "false");
                btn.children[1].innerHTML = 'arrow_drop_down';
            },
            openMenu: function openMenu(evt) {
                if (evt.target.getAttribute("aria-pressed") === "false") {
                    evt.target.setAttribute("aria-pressed", "true");
                    evt.target.children[1].innerHTML = 'arrow_drop_up';
                } else {
                    evt.target.setAttribute("aria-pressed", "false");
                    evt.target.children[1].innerHTML = 'arrow_drop_down';
                }
            },
            style: { margin: "5px" }
        },
        _react2.default.createElement(
            _Button2.default,
            {
                'menu-role': 'button',
                'aria-pressed': 'false',
                style: { height: "auto", padding: "5px 0" }
            },
            _react2.default.createElement(
                StyledIcon,
                { className: 'material-icons mdc-button__icon', 'aria-hidden': 'true' },
                'account_circle'
            ),
            _react2.default.createElement(
                StyledToggleIcon,
                { className: 'material-icons mdc-button__icon', 'aria-hidden': 'true' },
                'arrow_drop_down'
            )
        ),
        _react2.default.createElement(
            _Menu.Menu,
            {
                'menu-role': 'menu',
                offset: '-106px'
            },
            _react2.default.createElement(
                StyledButton,
                {
                    link: true,
                    linkTo: '/' + props.username
                },
                'Profile'
            ),
            _react2.default.createElement(_LogoutBtn2.default, null)
        )
    );
};

var _default = UserProfileMenu;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(StyledIcon, 'StyledIcon', 'src/components/menus/UserProfileMenu.js');
    reactHotLoader.register(StyledToggleIcon, 'StyledToggleIcon', 'src/components/menus/UserProfileMenu.js');
    reactHotLoader.register(StyledButton, 'StyledButton', 'src/components/menus/UserProfileMenu.js');
    reactHotLoader.register(UserProfileMenu, 'UserProfileMenu', 'src/components/menus/UserProfileMenu.js');
    reactHotLoader.register(_default, 'default', 'src/components/menus/UserProfileMenu.js');
    leaveModule(module);
})();

;
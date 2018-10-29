'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HomeLogo = undefined;

var _Link2 = require('react-router-dom/Link');

var _Link3 = _interopRequireDefault(_Link2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var HomeLogo = exports.HomeLogo = function HomeLogo() {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'span',
            { className: 'main-header-q' },
            'Q'
        ),
        'U',
        _react2.default.createElement(
            'span',
            { className: 'main-header-p' },
            'P'
        ),
        'U',
        _react2.default.createElement(
            'span',
            { className: 'main-header-l' },
            'L'
        )
    );
};

var NavBarHomeLink = function NavBarHomeLink(props) {
    return _react2.default.createElement(
        _Link3.default,
        { to: '/', style: { textDecoration: "none", color: "inherit" }, className: props.className },
        _react2.default.createElement(HomeLogo, null)
    );
};

var _default = NavBarHomeLink;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(HomeLogo, 'HomeLogo', 'src/components/links/NavBarHomeLink.js');
    reactHotLoader.register(NavBarHomeLink, 'NavBarHomeLink', 'src/components/links/NavBarHomeLink.js');
    reactHotLoader.register(_default, 'default', 'src/components/links/NavBarHomeLink.js');
    leaveModule(module);
})();

;
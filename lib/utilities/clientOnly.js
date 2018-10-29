'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var clientOnly = function clientOnly(Wrapped) {
    var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    var Component = _react2.default.createClass({
        displayName: 'Component',

        render: function render() {
            if (canUseDOM) {
                return null;
            } else {
                return _react2.default.createElement(Wrapped, this.props);
            }
        }
    });

    Component.contextTypes = serverContextTypes;

    return Component;
};

var _default = clientOnly;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(clientOnly, 'clientOnly', 'src/utilities/clientOnly.js');
    reactHotLoader.register(_default, 'default', 'src/utilities/clientOnly.js');
    leaveModule(module);
})();

;
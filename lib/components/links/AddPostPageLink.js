'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../mdc/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var AddPostPageLink = function AddPostPageLink() {
    return _react2.default.createElement(
        _Button2.default,
        {
            link: true,
            linkTo: '/AddPage',
            raised: true,
            style: { margin: "5px" }
        },
        'Write'
    );
};

var _default = AddPostPageLink;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(AddPostPageLink, 'AddPostPageLink', 'src/components/links/AddPostPageLink.js');
    reactHotLoader.register(_default, 'default', 'src/components/links/AddPostPageLink.js');
    leaveModule(module);
})();

;
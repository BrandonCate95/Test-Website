'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function formatDraftData(data) {

    if (data.imgKey) {
        var src = data.imgKey.split('?')[0].split('/');
        var imgKey = src[src.length - 1];
    }

    if (data.imgClass) {
        var newClass = data.imgClass.replace('fr-view', '').replace('fr-fil', '').replace('fr-dib', '').replace('fr-error', '').trim();
    }

    return _extends({ postId: data.postId || (0, _v2.default)() }, data.imgKey && { imgKey: imgKey }, data.imgClass && newClass && { imgClass: newClass }, data.title && { title: data.title }, data.content && { content: data.content }, data.notes && { notes: data.notes });
}

var _default = formatDraftData;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(formatDraftData, 'formatDraftData', 'src/utilities/formatDraftData.js');
    reactHotLoader.register(_default, 'default', 'src/utilities/formatDraftData.js');
    leaveModule(module);
})();

;
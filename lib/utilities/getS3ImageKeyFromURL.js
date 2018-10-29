'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function getS3ImageKeyFromURL(url) {
    var tmp = url.split('?')[0].split('/');
    return tmp[tmp.length - 1];
}

var _default = getS3ImageKeyFromURL;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(getS3ImageKeyFromURL, 'getS3ImageKeyFromURL', 'src/utilities/getS3ImageKeyFromURL.js');
    reactHotLoader.register(_default, 'default', 'src/utilities/getS3ImageKeyFromURL.js');
    leaveModule(module);
})();

;
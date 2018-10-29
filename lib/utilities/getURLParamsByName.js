"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function getURLParamsByName(name, url) {
    if (!url) url = ''; //window.location.href;
    name = name.replace(/[[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var _default = getURLParamsByName;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(getURLParamsByName, "getURLParamsByName", "src/utilities/getURLParamsByName.js");
    reactHotLoader.register(_default, "default", "src/utilities/getURLParamsByName.js");
    leaveModule(module);
})();

;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function getKeyWithoutPrefix(key) {
    var _ref = /([^/]+\/){2}(.*)$/.exec(key) || key,
        _ref2 = _slicedToArray(_ref, 3),
        keyWithoutPrefix = _ref2[2];

    return keyWithoutPrefix;
}

var _default = getKeyWithoutPrefix;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(getKeyWithoutPrefix, "getKeyWithoutPrefix", "src/utilities/getKeyWithoutPrefix.js");
    reactHotLoader.register(_default, "default", "src/utilities/getKeyWithoutPrefix.js");
    leaveModule(module);
})();

;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var _default = {
    "graphqlEndpoint": "https://ptoxunemj5hsphgfeekv43rb7u.appsync-api.us-west-2.amazonaws.com/graphql",
    "region": "us-west-2",
    "authenticationType": "AWS_IAM",
    "apiKey": "da2-e6iuxhuphbdsjie3qfbur52xvi"
};
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, "default", "src/AppSync.js");
    leaveModule(module);
})();

;
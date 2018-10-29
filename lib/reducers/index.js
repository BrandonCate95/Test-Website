'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _addpage = require('./addpage');

var _addpage2 = _interopRequireDefault(_addpage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var _default = (0, _redux.combineReducers)({
    //reducer list
    addpage: _addpage2.default,
    user: _user2.default
});

exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'src/reducers/index.js');
    leaveModule(module);
})();

;
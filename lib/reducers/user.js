'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var userInitialState = {
    identityId: '',
    username: '',
    isLoading: false,
    authenticated: false,
    emailVerified: false,
    error: ''
};

var user = function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userInitialState;
    var action = arguments[1];

    switch (action.type) {
        case 'RESTORE_STATE':
            return Object.assign({}, state, action.payload.user);
        case 'USER_LOGIN_START':
            return Object.assign({}, state, {
                isLoading: true
            });
        case 'USER_LOGIN_SUCCESS':
            return Object.assign({}, state, {
                identityId: action.payload.identityId,
                username: action.payload.username,
                emailVerified: action.payload.emailVerified,
                authenticated: true,
                isLoading: false,
                error: ''
            });
        case 'USER_LOGIN_FAILURE':
            return Object.assign({}, state, {
                identityId: '',
                username: '',
                authenticated: false,
                isLoading: false,
                error: action.error
            });
        case 'USER_LOGOUT_START':
            return Object.assign({}, state, {
                isLoading: true,
                authenticated: false, //this is optimistic response
                username: '',
                identityId: ''
            });
        case 'USER_LOGOUT_SUCCESS':
            return Object.assign({}, state, {
                authenticated: false,
                isLoading: false
            });
        case 'USER_LOGOUT_FAILURE':
            return Object.assign({}, state, {
                authenticated: false,
                isLoading: false,
                error: action.error
            });
        case 'USER_EMAIL_VERIFIED':
            return Object.assign({}, state, {
                emailVerified: true
            });
        default:
            return state;
    }
};

var _default = user;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(userInitialState, 'userInitialState', 'src/reducers/user.js');
    reactHotLoader.register(user, 'user', 'src/reducers/user.js');
    reactHotLoader.register(_default, 'default', 'src/reducers/user.js');
    leaveModule(module);
})();

;
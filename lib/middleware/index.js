'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var localStorageLoad = exports.localStorageLoad = function localStorageLoad(store) {
    return function (next) {
        return function (action) {
            switch (action.type) {
                case 'CLIENT_INIT':
                    var result = next(action);
                    try {
                        var storedState = JSON.parse(localStorage.getItem('REACT_ROUTER'));
                        if (storedState) {
                            store.dispatch({
                                type: 'RESTORE_STATE',
                                payload: storedState
                            });
                            fetch("/api/set_user", {
                                method: 'POST',
                                body: JSON.stringify({
                                    user: storedState.user
                                }),
                                headers: { "Content-Type": "application/json" }
                            });
                        }
                        return;
                    } catch (e) {
                        // Unable to load or parse stored state, proceed as usual
                    }
                    return result;
                default:
                    return next(action);
            }
        };
    };
};

var localStorageDump = exports.localStorageDump = function localStorageDump(store) {
    return function (next) {
        return function (action) {
            var result = next(action);
            var state = store.getState();
            localStorage.setItem('REACT_ROUTER', JSON.stringify(state));
            return result;
        };
    };
};
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(localStorageLoad, 'localStorageLoad', 'src/middleware/index.js');
    reactHotLoader.register(localStorageDump, 'localStorageDump', 'src/middleware/index.js');
    leaveModule(module);
})();

;
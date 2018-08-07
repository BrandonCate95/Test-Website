define(['exports', 'babel-runtime/regenerator', 'babel-runtime/helpers/asyncToGenerator', 'aws-amplify'], function (exports, _regenerator, _asyncToGenerator2, _awsAmplify) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.updateAddPageCache = exports.userEmailVerified = exports.userLogoutFailure = exports.userLogoutSuccess = exports.userLogoutStart = exports.userLogout = exports.userLoginFailure = exports.userLoginSuccess = exports.userLoginStart = exports.userLogin = exports.restoreState = undefined;

    var _regenerator2 = _interopRequireDefault(_regenerator);

    var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var restoreState = exports.restoreState = function restoreState(payload) {
        return {
            type: 'RESTORE_STATE',
            payload: payload
        };
    };

    var userLogin = exports.userLogin = function userLogin(payload) {
        return function (dispatch) {
            dispatch(userLoginStart());
            _awsAmplify.Auth.signIn(payload.username, payload.password).then(function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(userData) {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.t0 = dispatch;
                                    _context.t1 = userLoginSuccess;
                                    _context.next = 4;
                                    return _awsAmplify.Auth.currentUserInfo();

                                case 4:
                                    _context.t2 = _context.sent.id;
                                    _context.t3 = userData.username;
                                    _context.t4 = userData.signInUserSession.idToken.payload.email_verified;
                                    _context.t5 = {
                                        identityId: _context.t2,
                                        username: _context.t3,
                                        emailVerified: _context.t4
                                    };
                                    _context.t6 = (0, _context.t1)(_context.t5);
                                    (0, _context.t0)(_context.t6);

                                case 10:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, undefined);
                }));

                return function (_x) {
                    return _ref.apply(this, arguments);
                };
            }()).catch(function (error) {
                dispatch(userLoginFailure(error));
            });
        };
    };

    var userLoginStart = exports.userLoginStart = function userLoginStart() {
        return {
            type: 'USER_LOGIN_START'
        };
    };

    var userLoginSuccess = exports.userLoginSuccess = function userLoginSuccess(payload) {
        return {
            type: 'USER_LOGIN_SUCCESS',
            payload: payload
        };
    };

    var userLoginFailure = exports.userLoginFailure = function userLoginFailure(error) {
        return {
            type: 'USER_LOGIN_FAILURE',
            error: error
        };
    };

    var userLogout = exports.userLogout = function userLogout() {
        return function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                dispatch(userLogoutStart());
                                _awsAmplify.Auth.signOut().then(function (data) {
                                    return dispatch(userLogoutSuccess(data));
                                }).catch(function (error) {
                                    return dispatch(userLogoutFailure(error));
                                });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined);
            }));

            return function (_x2) {
                return _ref2.apply(this, arguments);
            };
        }();
    };

    var userLogoutStart = exports.userLogoutStart = function userLogoutStart() {
        return {
            type: 'USER_LOGOUT_START'
        };
    };

    var userLogoutSuccess = exports.userLogoutSuccess = function userLogoutSuccess(payload) {
        return {
            type: 'USER_LOGOUT_SUCCESS',
            payload: payload
        };
    };

    var userLogoutFailure = exports.userLogoutFailure = function userLogoutFailure(error) {
        return {
            type: 'USER_LOGOUT_FAILURE',
            error: error
        };
    };

    // used in code verify page
    var userEmailVerified = exports.userEmailVerified = function userEmailVerified() {
        return {
            type: 'USER_EMAIL_VERIFIED'
        };
    };

    var updateAddPageCache = exports.updateAddPageCache = function updateAddPageCache(payload) {
        return {
            type: 'UPDATE_ADD_PAGE_CACHE',
            payload: payload
        };
    };
});
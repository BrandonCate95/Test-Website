'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AUTH_TYPE = exports.AWSAppSyncClient = exports.createLinkWithCache = exports.createAppSyncLink = exports.createAuthLink = exports.createSubscriptionHandshakeLink = exports.defaultDataIdFromObject = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

require('setimmediate');

var _apolloClient = require('apollo-client');

var _apolloClient2 = _interopRequireDefault(_apolloClient);

var _apolloCacheInmemory = require('apollo-cache-inmemory');

var _apolloLink = require('apollo-link');

var _apolloLinkHttp = require('apollo-link-http');

var _apolloUtilities = require('apollo-utilities');

var _index = require('aws-appsync/lib/cache/index');

var _link = require('aws-appsync/lib/link');

var _store = require('aws-appsync/lib/store');

var _utils = require('aws-appsync/lib/utils');

var _conflictResolutionLink = require('aws-appsync/lib/link/conflict-resolution-link');

var _conflictResolutionLink2 = _interopRequireDefault(_conflictResolutionLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
exports.defaultDataIdFromObject = _index.defaultDataIdFromObject;
var createSubscriptionHandshakeLink = exports.createSubscriptionHandshakeLink = function createSubscriptionHandshakeLink(url) {
    var resultsFetcherLink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _apolloLinkHttp.createHttpLink)({ uri: url });

    return _apolloLink.ApolloLink.split(function (operation) {
        var query = operation.query;

        var _getMainDefinition = (0, _apolloUtilities.getMainDefinition)(query),
            kind = _getMainDefinition.kind,
            graphqlOperation = _getMainDefinition.operation;

        var isSubscription = kind === 'OperationDefinition' && graphqlOperation === 'subscription';
        return isSubscription;
    }, _apolloLink.ApolloLink.from([new _link.NonTerminatingLink('subsInfo', { link: resultsFetcherLink }), new _link.SubscriptionHandshakeLink('subsInfo')]), resultsFetcherLink);
};
var createAuthLink = exports.createAuthLink = function createAuthLink(_ref) {
    var url = _ref.url,
        region = _ref.region,
        auth = _ref.auth;
    return new _link.AuthLink({ url: url, region: region, auth: auth });
};
var createAppSyncLink = exports.createAppSyncLink = function createAppSyncLink(_ref2) {
    var url = _ref2.url,
        region = _ref2.region,
        auth = _ref2.auth,
        complexObjectsCredentials = _ref2.complexObjectsCredentials,
        _ref2$resultsFetcherL = _ref2.resultsFetcherLink,
        resultsFetcherLink = _ref2$resultsFetcherL === undefined ? (0, _apolloLinkHttp.createHttpLink)({ uri: url }) : _ref2$resultsFetcherL,
        conflictResolver = _ref2.conflictResolver;

    var link = _apolloLink.ApolloLink.from([createLinkWithStore(function (store) {
        return new _link.OfflineLink(store);
    }), new _conflictResolutionLink2.default(conflictResolver), new _link.ComplexObjectLink(complexObjectsCredentials), createAuthLink({ url: url, region: region, auth: auth }), createSubscriptionHandshakeLink(url, resultsFetcherLink)].filter(Boolean));
    return link;
};
var createLinkWithCache = exports.createLinkWithCache = function createLinkWithCache() {
    var createLinkFunc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (cache) {
        return new _apolloLink.ApolloLink(_utils.passthroughLink);
    };

    var theLink = void 0;
    return new _apolloLink.ApolloLink(function (op, forward) {
        if (!theLink) {
            var _op$getContext = op.getContext(),
                cache = _op$getContext.cache;

            theLink = createLinkFunc(cache);
        }
        return theLink.request(op, forward);
    });
};
var createLinkWithStore = function createLinkWithStore() {
    var createLinkFunc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (store) {
        return new _apolloLink.ApolloLink(_utils.passthroughLink);
    };

    return createLinkWithCache(function (cache) {
        var store = cache.store;

        return store ? createLinkFunc(store) : new _apolloLink.ApolloLink(_utils.passthroughLink);
    });
};
;

var AWSAppSyncClient = function (_ApolloClient) {
    _inherits(AWSAppSyncClient, _ApolloClient);

    function AWSAppSyncClient(_ref3, options) {
        var url = _ref3.url,
            region = _ref3.region,
            auth = _ref3.auth,
            conflictResolver = _ref3.conflictResolver,
            complexObjectsCredentials = _ref3.complexObjectsCredentials,
            _ref3$cacheOptions = _ref3.cacheOptions,
            cacheOptions = _ref3$cacheOptions === undefined ? {} : _ref3$cacheOptions,
            _ref3$disableOffline = _ref3.disableOffline,
            disableOffline = _ref3$disableOffline === undefined ? false : _ref3$disableOffline,
            _ref3$offlineConfig = _ref3.offlineConfig;
        _ref3$offlineConfig = _ref3$offlineConfig === undefined ? {} : _ref3$offlineConfig;
        var _ref3$offlineConfig$s = _ref3$offlineConfig.storage,
            storage = _ref3$offlineConfig$s === undefined ? undefined : _ref3$offlineConfig$s,
            _ref3$offlineConfig$c = _ref3$offlineConfig.callback,
            callback = _ref3$offlineConfig$c === undefined ? function () {} : _ref3$offlineConfig$c;

        _classCallCheck(this, AWSAppSyncClient);

        var _ref4 = options || {},
            _ref4$cache = _ref4.cache,
            customCache = _ref4$cache === undefined ? undefined : _ref4$cache,
            _ref4$link = _ref4.link,
            customLink = _ref4$link === undefined ? undefined : _ref4$link;

        if (!customLink && (!url || !region || !auth)) {
            throw new Error('In order to initialize AWSAppSyncClient, you must specify url, region and auth properties on the config object or a custom link.');
        }
        var resolveClient = void 0;
        var dataIdFromObject = disableOffline ? function () {
            return null;
        } : cacheOptions.dataIdFromObject || _index.defaultDataIdFromObject;
        var store = disableOffline ? null : (0, _store.createStore)(function () {
            return _this;
        }, function () {
            resolveClient(_this);
        }, dataIdFromObject, storage, callback);
        var cache = disableOffline ? customCache || new _apolloCacheInmemory.InMemoryCache(cacheOptions) : new _index.OfflineCache(store, cacheOptions);
        var waitForRehydrationLink = new _apolloLink.ApolloLink(function (op, forward) {
            var handle = null;
            return new _apolloLink.Observable(function (observer) {
                _this.hydratedPromise.then(function () {
                    handle = (0, _utils.passthroughLink)(op, forward).subscribe(observer);
                }).catch(observer.error);
                return function () {
                    if (handle) {
                        handle.unsubscribe();
                    }
                };
            });
        });
        var link = waitForRehydrationLink.concat(customLink || createAppSyncLink({ url: url, region: region, auth: auth, complexObjectsCredentials: complexObjectsCredentials, conflictResolver: conflictResolver }));
        var newOptions = Object.assign({}, options, { link: link,
            cache: cache });

        var _this = _possibleConstructorReturn(this, (AWSAppSyncClient.__proto__ || Object.getPrototypeOf(AWSAppSyncClient)).call(this, newOptions));

        _this.hydratedPromise = disableOffline ? Promise.resolve(_this) : new Promise(function (resolve) {
            resolveClient = resolve;
        });
        _this._disableOffline = disableOffline;
        _this._store = store;
        return _this;
    }

    _createClass(AWSAppSyncClient, [{
        key: 'hydrated',
        value: function hydrated() {
            return this.hydratedPromise;
        }
    }, {
        key: 'isOfflineEnabled',
        value: function isOfflineEnabled() {
            return !this._disableOffline;
        }
    }, {
        key: 'mutate',
        value: function mutate(options) {
            if (!this.isOfflineEnabled()) {
                return _get(AWSAppSyncClient.prototype.__proto__ || Object.getPrototypeOf(AWSAppSyncClient.prototype), 'mutate', this).call(this, options);
            }
            var doIt = false;

            var origContext = options.context,
                optimisticResponse = options.optimisticResponse,
                update = options.update,
                otherOptions = __rest(options, ["context", "optimisticResponse", "update"]);

            var context = Object.assign({}, origContext, { AASContext: {
                    doIt: doIt,
                    optimisticResponse: optimisticResponse,
                    update: update
                } });
            return _get(AWSAppSyncClient.prototype.__proto__ || Object.getPrototypeOf(AWSAppSyncClient.prototype), 'mutate', this).call(this, Object.assign({ optimisticResponse: optimisticResponse,
                context: context,
                update: update }, otherOptions));
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return AWSAppSyncClient;
}(_apolloClient2.default);

var _default = AWSAppSyncClient;
exports.default = _default;
exports.AWSAppSyncClient = AWSAppSyncClient;
exports.AUTH_TYPE = _link.AUTH_TYPE;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(__rest, '__rest', 'src/components/aws-appsync/client.js');
    reactHotLoader.register(createSubscriptionHandshakeLink, 'createSubscriptionHandshakeLink', 'src/components/aws-appsync/client.js');
    reactHotLoader.register(createAuthLink, 'createAuthLink', 'src/components/aws-appsync/client.js');
    reactHotLoader.register(createAppSyncLink, 'createAppSyncLink', 'src/components/aws-appsync/client.js');
    reactHotLoader.register(createLinkWithCache, 'createLinkWithCache', 'src/components/aws-appsync/client.js');
    reactHotLoader.register(createLinkWithStore, 'createLinkWithStore', 'src/components/aws-appsync/client.js');
    reactHotLoader.register(AWSAppSyncClient, 'AWSAppSyncClient', 'src/components/aws-appsync/client.js');
    reactHotLoader.register(_default, 'default', 'src/components/aws-appsync/client.js');
    leaveModule(module);
})();

;
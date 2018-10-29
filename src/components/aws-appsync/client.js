var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import 'setimmediate';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, Observable } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import { OfflineCache, defaultDataIdFromObject } from 'aws-appsync/lib/cache/index';
import { OfflineLink, AuthLink, NonTerminatingLink, SubscriptionHandshakeLink, ComplexObjectLink, AUTH_TYPE } from 'aws-appsync/lib/link';
import { createStore } from 'aws-appsync/lib/store';
import { passthroughLink } from 'aws-appsync/lib/utils';
import ConflictResolutionLink from 'aws-appsync/lib/link/conflict-resolution-link';
export { defaultDataIdFromObject };
export const createSubscriptionHandshakeLink = (url, resultsFetcherLink = createHttpLink({ uri: url })) => {
    return ApolloLink.split(operation => {
        const { query } = operation;
        const { kind, operation: graphqlOperation } = getMainDefinition(query);
        const isSubscription = kind === 'OperationDefinition' && graphqlOperation === 'subscription';
        return isSubscription;
    }, ApolloLink.from([
        new NonTerminatingLink('subsInfo', { link: resultsFetcherLink }),
        new SubscriptionHandshakeLink('subsInfo'),
    ]), resultsFetcherLink);
};
export const createAuthLink = ({ url, region, auth }) => new AuthLink({ url, region, auth });
export const createAppSyncLink = ({ url, region, auth, complexObjectsCredentials, resultsFetcherLink = createHttpLink({ uri: url }), conflictResolver, }) => {
    const link = ApolloLink.from([
        createLinkWithStore((store) => new OfflineLink(store)),
        new ConflictResolutionLink(conflictResolver),
        new ComplexObjectLink(complexObjectsCredentials),
        createAuthLink({ url, region, auth }),
        createSubscriptionHandshakeLink(url, resultsFetcherLink)
    ].filter(Boolean));
    return link;
};
export const createLinkWithCache = (createLinkFunc = (cache) => new ApolloLink(passthroughLink)) => {
    let theLink;
    return new ApolloLink((op, forward) => {
        if (!theLink) {
            const { cache } = op.getContext();
            theLink = createLinkFunc(cache);
        }
        return theLink.request(op, forward);
    });
};
const createLinkWithStore = (createLinkFunc = (store) => new ApolloLink(passthroughLink)) => {
    return createLinkWithCache((cache) => {
        const { store } = cache;
        return store ? createLinkFunc(store) : new ApolloLink(passthroughLink);
    });
};
;
class AWSAppSyncClient extends ApolloClient {
    constructor({ url, //
    region, //
    auth, //
    conflictResolver, complexObjectsCredentials, //
    cacheOptions = {}, disableOffline = false, //
    offlineConfig: { storage = undefined, callback = () => { }, } = {}, }, options) {
        const { cache: customCache = undefined, link: customLink = undefined } = options || {};
        if (!customLink && (!url || !region || !auth)) {
            throw new Error('In order to initialize AWSAppSyncClient, you must specify url, region and auth properties on the config object or a custom link.');
        }
        let resolveClient;
        const dataIdFromObject = disableOffline ? () => null : cacheOptions.dataIdFromObject || defaultDataIdFromObject;
        const store = disableOffline ? null : createStore(() => this, () => { resolveClient(this); }, dataIdFromObject, storage, callback);
        const cache = disableOffline ? (customCache || new InMemoryCache(cacheOptions)) : new OfflineCache(store, cacheOptions);
        const waitForRehydrationLink = new ApolloLink((op, forward) => {
            let handle = null;
            return new Observable(observer => {
                this.hydratedPromise.then(() => {
                    handle = passthroughLink(op, forward).subscribe(observer);
                }).catch(observer.error);
                return () => {
                    if (handle) {
                        handle.unsubscribe();
                    }
                };
            });
        });
        const link = waitForRehydrationLink.concat(customLink || createAppSyncLink({ url, region, auth, complexObjectsCredentials, conflictResolver }));
        const newOptions = Object.assign({}, options, { link,
            cache });
        super(newOptions);
        this.hydratedPromise = disableOffline ? Promise.resolve(this) : new Promise(resolve => { resolveClient = resolve; });
        this._disableOffline = disableOffline;
        this._store = store;
    }
    hydrated() {
        return this.hydratedPromise;
    }
    ;
    isOfflineEnabled() {
        return !this._disableOffline;
    }
    mutate(options) {
        if (!this.isOfflineEnabled()) {
            return super.mutate(options);
        }
        const doIt = false;
        const { context: origContext, optimisticResponse, update } = options, otherOptions = __rest(options, ["context", "optimisticResponse", "update"]);
        const context = Object.assign({}, origContext, { AASContext: {
                doIt,
                optimisticResponse,
                update,
            } });
        return super.mutate(Object.assign({ optimisticResponse,
            context,
            update }, otherOptions));
    }
}
export default AWSAppSyncClient;
export { AWSAppSyncClient };
export { AUTH_TYPE };

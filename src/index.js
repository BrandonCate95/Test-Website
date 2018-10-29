import React from 'react'
import './index.scss'
import App from './App'

import { createStore, applyMiddleware } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import reduxStore from './reducers'
import thunkMiddleware from 'redux-thunk'
import { localStorageLoad, localStorageDump } from './middleware/index'

import AppSync from './AppSync.js'
import awsmobile from './aws-exports'

import Loadable from 'react-loadable'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
// import Amplify, {Auth} from 'aws-amplify'
import AWSAppSyncClient from 'aws-appsync'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { config, CognitoIdentityCredentials } from 'aws-sdk/global'
import Storage from '@aws-amplify/storage/lib' //includes @aws-amplify/core but only uses core.credentials and core.AWS.config
import Credentials from '@aws-amplify/core/lib/Credentials' //imports facet which imports aws-sdk but only uses config/credentials/CognitoIdentityCredentials

// var AWS = require('aws-sdk')

!async function(){

    // const { default: Loadable } = await import(/* webpackChunkName: "loadable" */ 'react-loadable')
    // const { BrowserRouter } = await import(/* webpackChunkName: "react-router-dom" */ 'react-router-dom')
    // const { hydrate } = await import(/* webpackChunkName: "react-dom" */ 'react-dom')
    // const { ApolloProvider } = await import(/* webpackChunkName: "react-apollo" */ 'react-apollo')
    // const { default: Amplify } = await import(/* webpackChunkName: "amplify" */ 'aws-amplify')
    // const { default: Auth } = await import(/* webpackChunkName: "auth" */ '@aws-amplify/auth/lib')
    // const { default: AWSApstoragelient } = await import(/* webpackChunkName: "aws-appsync-react" */ 'aws-appsync')
    // const { InMemoryCache } = await import(/* webpackChunkName: "apollo-cache-inmemory" */ 'apollo-cache-inmemory')

    // Amplify.configure(awsmobile) 

    const creds = {
        identityPoolId: "us-east-2:75c318fc-8d9b-4659-8a64-9c245b1317aa",
        mandatorySignIn: false,
        refreshHandlers: undefined,
        region: "us-east-2",
        userPoolId: "us-east-2_8qMRGnVK5"
    }

    config.update({
        region: 'us-east-2',
        credentials: new CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-2:75c318fc-8d9b-4659-8a64-9c245b1317aa'
        })
    })

    Credentials.configure(creds)
    Storage.configure(awsmobile)

    // THIS TEST SHOWS THAT DIRECT ACCESS TO DYNAMO DB IS MUCH FASTER ABOUT 4-7 TIMES AS FAST SO NEED TO USE THIS FOR POST PAGE LOAD!
    // var ddb = new AWS.DynamoDB.DocumentClient()

    // var params = {
    //     TableName: 'delete-soon',
    //     Key: {
    //         'id' : '1'
    //     },
    //     AttributesToGet: ['username']
    // }

    // // Call DynamoDB to read the item from the table
    // ddb.get(params, function(err, data) {
    // if (err) {
    //     console.log("Error", err);
    // } else {
    //     console.log("Success", data);
    // }
    // })

    const client = new AWSAppSyncClient({
        url: AppSync.graphqlEndpoint,
        region: AppSync.region,
        auth: {
            type: AppSync.authenticationType,
            credentials: config.credentials,
        },
        complexObjectsCredentials: config.credentials,
    })
    client.store.cache = new InMemoryCache().restore(window.__APOLLO_STATE__)

    let middleware = [ localStorageDump, localStorageLoad, thunkMiddleware ]
    if (process.env.NODE_ENV !== 'production') {
        let { logger } = await import(/* webpackChunkName: "redux-logger" */ 'redux-logger')
        middleware = [ ...middleware, logger ]
    }

    const store = createStore(reduxStore, window.__REDUX_STATE__, applyMiddleware(...middleware))    
    store.dispatch({ type: 'CLIENT_INIT' })
    
    const WithProvider = () => (
        <ApolloProvider client={client}>
            <ReduxProvider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ReduxProvider>
        </ApolloProvider>
    ) 
    
    Loadable.preloadReady().then(() => {
        hydrate(<WithProvider />, document.getElementById('root'))
    })
}()
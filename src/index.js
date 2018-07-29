import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxStore from './reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { localStorageLoad, localStorageDump } from './middleware/index'

import { Auth } from 'aws-amplify'
import AWSAppSyncClient  from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { ApolloProvider } from 'react-apollo'
import AppSync from './AppSync.js'

import Amplify from 'aws-amplify'
import awsmobile from './aws-exports'
  
Amplify.configure(awsmobile)

const client = new AWSAppSyncClient({
    url: AppSync.graphqlEndpoint,
    region: AppSync.region,
    auth: {
        type: AppSync.authenticationType,
        apiKey: AppSync.apiKey,
        credentials: async () => await Auth.currentCredentials(),
    },
    complexObjectsCredentials: () => Auth.currentCredentials(),
});

const loggerMiddleware = createLogger()

const store = createStore(
    reduxStore,
    applyMiddleware(
        localStorageDump, // I really dont know why dump is in first but only way it works
        localStorageLoad,
        thunkMiddleware,
    
        //logger needs to be last (first?)
        loggerMiddleware
    )
)

store.dispatch({ type: 'INIT' });

const WithProvider = () => (
    <ApolloProvider client={client}>
        <Rehydrated>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </Rehydrated>
    </ApolloProvider>
) 

ReactDOM.render(<WithProvider />, document.getElementById('root'));
//registerServiceWorker();
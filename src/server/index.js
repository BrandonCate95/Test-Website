import 'cross-fetch/polyfill';

import express from "express";
import path from "path";
import glob from "glob";
import React from "react";
import { renderToString } from "react-dom/server";

import { StaticRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import reduxStore from '../reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { localStorageLoad, localStorageDump } from '../middleware'

import { Auth } from 'aws-amplify'
import AWSAppSyncClient  from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { ApolloProvider } from 'react-apollo'
import AppSync from '../AppSync.js'
import awsmobile from '../aws-exports'

import App from '../App'

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

const app = express();


app.use( express.static( path.resolve( __dirname, "../../build/static" ) ) );

var jsFile = "";
glob(path.resolve( __dirname, "../../build/static/js/main.*.js" ), (er, files) => { jsFile = files[0].split('static')[1]; console.log(jsFile) })

var cssFile = "";
glob(path.resolve( __dirname, "../../build/static/css/main.*.css" ), (er, files) => { cssFile = files[0].split('static')[1]; console.log(cssFile) })


app.get( "/*", ( req, res ) => {
    const context = { };
    console.log('hi')

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
    );
    store.dispatch({ type: 'INIT' });

    const jsx = (
        <ApolloProvider client={ client }>
            <ReduxProvider store={ store }>
                <StaticRouter context={ context } location={ req.url }>
                    <App />
                </StaticRouter>
            </ReduxProvider>
        </ApolloProvider>
    );

    const reactDom = renderToString( jsx );

    const reduxState = store.getState( );


    res.writeHead( 200, { "Content-Type": "text/html" } );

    const html = htmlTemplate( cssFile, jsFile, reactDom, reduxState )
    console.log(html)

    res.end( html );

    // var ua = req.headers['user-agent'],
    //     $ = {};

    // if (/mobile/i.test(ua))
    //     $.Mobile = true;

    // if (/like Mac OS X/.test(ua)) {
    //     $.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/.exec(ua)[2].replace(/_/g, '.');
    //     $.iPhone = /iPhone/.test(ua);
    //     $.iPad = /iPad/.test(ua);
    // }

    // if (/Android/.test(ua))
    //     $.Android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];

    // if (/webOS\//.test(ua))
    //     $.webOS = /webOS\/([0-9\.]+)[\);]/.exec(ua)[1];

    // if (/(Intel|PPC) Mac OS X/.test(ua))
    //     $.Mac = /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/.exec(ua)[2].replace(/_/g, '.') || true;

    // if (/Windows NT/.test(ua))
    //     $.Windows = /Windows NT ([0-9\._]+)[\);]/.exec(ua)[1];

})

const port = 8081
app.listen( port );

function htmlTemplate( cssFile, jsFile, reactDom, reduxState ) {
    return `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
            <meta name="theme-color" content="#000000">
            <link rel="manifest" href="/manifest.json">
            <link rel="shortcut icon" href="/favicon.ico">
            <title>React App</title>
            <link href=${cssFile} rel="stylesheet">
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">${reactDom}</div>
            <script>
                window.REDUX_DATA = ${ JSON.stringify( reduxState ) }
            </script>
            <script type="text/javascript" src=${jsFile}></script>
        </body>
    </html>
    `;
}

console.log(`listening on port: ${port}`)
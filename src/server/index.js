import express from "express";
import path from "path";
import glob from "glob";
import React from "react";
// import { renderToString } from "react-dom/server";
// import { StaticRouter } from "react-router-dom";
import App from '../App'

const app = express();

console.log(path.resolve( __dirname, "../../build/static/js" ));
app.use( express.static( path.resolve( __dirname, "../../build" ) ) );

console.log(app)

var jsFile = "";
glob(path.resolve( __dirname, "../../build/static/js/main.*.js" ), (er, files) => { jsFile = files[0].split('build')[1]; console.log(jsFile) })
console.log(jsFile)

var cssFile = "";
glob(path.resolve( __dirname, "../../build/static/css/main.*.css" ), (er, files) => { cssFile = files[0].split('build')[1]; console.log(cssFile) })
console.log(cssFile)

app.get( "/*", ( req, res ) => {
    // const context = { };
    console.log(App)
    // const jsx = (
    //     <StaticRouter context={ context } location={ req.url }>
    //         <App />
    //     </StaticRouter>
    // );
    // const reactDom = renderToString( jsx );

    // res.writeHead( 200, { "Content-Type": "text/html" } );
    // res.end( htmlTemplate( reactDom ) );

    var ua = req.headers['user-agent'],
        $ = {};

    if (/mobile/i.test(ua))
        $.Mobile = true;

    if (/like Mac OS X/.test(ua)) {
        $.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/.exec(ua)[2].replace(/_/g, '.');
        $.iPhone = /iPhone/.test(ua);
        $.iPad = /iPad/.test(ua);
    }

    if (/Android/.test(ua))
        $.Android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];

    if (/webOS\//.test(ua))
        $.webOS = /webOS\/([0-9\.]+)[\);]/.exec(ua)[1];

    if (/(Intel|PPC) Mac OS X/.test(ua))
        $.Mac = /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/.exec(ua)[2].replace(/_/g, '.') || true;

    if (/Windows NT/.test(ua))
        $.Windows = /Windows NT ([0-9\._]+)[\);]/.exec(ua)[1];

})

app.listen( 8081 );

function htmlTemplate( reactDom ) {
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
            <script type="text/javascript" src=${jsFile}></script>
        </body>
    </html>
    `;
}

console.log('listening on port 5000')
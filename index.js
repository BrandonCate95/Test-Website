require("babel-polyfill");
require( "babel-register" )( {
    ignore: [/node_modules\/(?!@material)/],
    presets: [ "env", "react" ],
    plugins: [ 
        "react-loadable/babel",
        "dynamic-import-node",
        "transform-es2015-modules-commonjs", 
        "transform-object-rest-spread", 
        "transform-class-properties"
    ]
} );
require( "./src/server/index.js" );

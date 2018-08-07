require( "babel-register" )( {
    ignore: /node_modules\/(?!@material)/,
    presets: [ "env" ],
    plugins: [ "transform-es2015-modules-commonjs", "transform-object-rest-spread", "transform-class-properties" ]
} );
require( "./src/server/index.js" );

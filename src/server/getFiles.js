var glob = require("glob");
var path = require("path");

// options is optional
glob(path.resolve( __dirname, "../../build/static/js/main.*.js" ), function (er, files) {
    console.log(files)
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
})
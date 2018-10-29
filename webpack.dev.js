const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  entry: {
    index: ['./src/index.js', 'webpack-hot-middleware/client'],
    // app: ['./src/App.js', 'webpack-hot-middleware/client']
  },
  devtool: 'inline-source-map',
  plugins: [
    // OccurrenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['dist'])
  ]
});
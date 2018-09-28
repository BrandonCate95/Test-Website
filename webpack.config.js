const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const entry = './src/entry.jsx';
const outputPath = path.resolve('./dist');
const publicPath = '/dist/';
const resolve = {
  extensions: ['.js', '.jsx', '.css'],
};

const clientConfig = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry,
  output: {
    path: outputPath,
    filename: 'index.bundle.js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        loader: 'babel-loader',
        include: [path.resolve('./src')],
        options: {
          plugins: ['dynamic-import-webpack'],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  resolve,
};

const serverConfig = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry,
  output: {
    path: outputPath,
    filename: 'index.server.bundle.js',
    libraryTarget: 'commonjs2',
    publicPath,
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        loader: 'babel-loader',
        include: [path.resolve('./src')],
        options: {
          plugins: ['dynamic-import-node'],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  resolve,
};

module.exports = [
  clientConfig,
  serverConfig,
];

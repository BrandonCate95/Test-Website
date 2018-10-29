const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { ReactLoadablePlugin } = require("react-loadable/webpack")
const InlineSourcePlugin = require('html-webpack-inline-source-plugin')

const devMode = process.env.NODE_ENV == 'dev'
module.exports = {
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 0, //stops redundant code in split components.
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          minChunks: Infinity,
        },
        // 'aws-amplify': {
        //   test: /(?![\\/]node_modules[\\/]aws-sdk[\\/]lib)([\\/]node_modules[\\/](aws-amplify|@aws-amplify|aws-sdk|amazon-cognito-identity-js|amazon-cognito-auth-js)[\\/])/,
        //   name: 'aws-amplify',
        //   enforce: true
        // },
        // 'aws-sdk': {
        //   test: /[\\/]node_modules[\\/]aws-sdk[\\/]/,
        //   name: 'aws-sdk',
        //   enforce: true
        // },
        styles: {
          name: 'styles',
          test: /\.scss$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      inlineSource: 'runtime.+\\.js',
      minify: true
    }),
    new InlineSourcePlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new ReactLoadablePlugin({
        filename: path.resolve(__dirname, 'react-loadable.json'),
    }),
  ],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: [/\.scss$/],
        include: path.resolve(__dirname, './src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            }
          },
        ]
      },
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
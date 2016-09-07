var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
 
var ignore = new webpack.IgnorePlugin(/^(ts-type-info)$/)

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var appCss = new ExtractTextPlugin('app.css?[hash]');

module.exports = {
  entry: {
    'polyfills': './src/app/polyfills.ts',
    'vendor': './src/app/vendor.ts',
    'app': './src/app/main.ts'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.ts', '.scss']
  },

  module: {
    noParse: [/directory-tree.js/, /ts-type-info.js/],
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html?-minimize'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        loader: appCss.extract("css!sass")
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/app/index.html'
    }),
    new CopyWebpackPlugin([
      { from: 'package.json' },
    ]),
    
    appCss

  ]
};

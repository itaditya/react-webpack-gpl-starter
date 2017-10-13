const webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  PrettierPlugin = require("prettier-webpack-plugin");
module.exports = {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      },
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new PrettierPlugin({
      semi: false
    })
  ]
};

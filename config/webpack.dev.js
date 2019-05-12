/*global require module __dirname:true*/

const { resolve } = require('path');
const webpack = require('webpack'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'example',
  target: 'web',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: resolve(__dirname, '../example/app.js'),
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[hash:6].js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: resolve(__dirname, '../example/index.html'),
    filename: 'index.html',
  })],
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
    compress: true,
    port: 9000,
    hot: true,
    hotOnly: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
  },
  module: {
    rules: [
      { resource: { test: /\.html$/ }, use: ['html-loader'] },
      {
        resource: {
          test: /\.jsx?$/,
          exclude: [/node_modules/],
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
              '@babel/preset-react'
            ],
            plugins: getAllStagePluginsOfBabel(),
          },
        },
      },
      {
        resource: {
          test: /\.(less|css)$/
        },
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'less-loader',
            options: { sourceMap: true }
          }
        ],
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'on-svg': 'OnSvg',
  }
};

/**
 * 获取babel stage0、1、2、3的所有插件
 * @returns {Array} 一个包含`babel-loader`插件配置的数组
 */
function getAllStagePluginsOfBabel() {
  return [
    // Stage 0
    '@babel/plugin-proposal-function-bind',

    // Stage 1
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    ['@babel/plugin-proposal-optional-chaining', { 'loose': false }],
    ['@babel/plugin-proposal-pipeline-operator', { 'proposal': 'minimal' }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { 'loose': false }],
    '@babel/plugin-proposal-do-expressions',

    // Stage 2
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',

    // Stage 3
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { 'loose': false }],
    '@babel/plugin-proposal-json-strings'
  ];
}
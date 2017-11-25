var path = require('path')
var fs = require('fs')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

var modules = {}
var cPath = path.join(__dirname, '../src/modules')
var files = fs.readdirSync(cPath)
if (files) {
  files.forEach(function (name) {
    var p = path.join(cPath, name)
    if (fs.statSync(p).isDirectory()) {
      modules[name] = p
    }
  })
}

var webpackConfig = merge(baseWebpackConfig, {
  entry: modules,
  module: {
    rules: utils.styleLoaders({ sourceMap: false, extract: true })
  },
  devtool: false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('[name]/index.js'),
    library: 'jui',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('[name]/style.css'))
  ]
})

module.exports = webpackConfig

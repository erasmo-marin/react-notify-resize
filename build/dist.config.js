/**
 * Copyright 2015-present Zippy Technologies
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var webpack = require('webpack');
var assign = require('object-assign');

var resolve = require('./resolve');
var loaders = require('./loaders');
var plugins = require('./plugins');
var externals = assign({}, require('./externals'));

externals.react = 'React';

module.exports = {
  entry: './src/index.js',
  bail: true,
  output: {
    path: __dirname + '/../dist',
    libraryTarget: 'umd',
    library: 'ReactClass',
    filename: 'index.js'
  },
  module: {
    loaders: loaders
  },
  externals: externals,
  resolve: resolve,
  plugins: plugins
};

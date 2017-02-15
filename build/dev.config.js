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

var PORT = 9090;
var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  //we expose all vars exported by env.js to the client
  'process.env': JSON.stringify({
    NODE_ENV: 'development'
  })
});

module.exports = {
  watchPoll: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  entry: [
    // 'webpack-dev-server/client?http://localhost:' + PORT,
    // 'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    publicPath: '/assets/'
  },
  module: {
    loaders: require('./loaders')
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    definePlugin
  ],
  devServer: {
    publicPath: '/assets/',
    port: PORT,
    // hot: true,
    host: 'localhost',
    historyApiFallback: true
  }
};

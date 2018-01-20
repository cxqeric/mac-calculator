/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');


module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  }
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js'],
    print: ['./src/print.js']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),    
    new HtmlWebpackPlugin({
      title: 'Babel'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              ['@babel/preset-stage-0', { "decoratorsLegacy": true }]
            ]
          }
        }
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    port: 5001,
    open: 'chrome'
  }
};
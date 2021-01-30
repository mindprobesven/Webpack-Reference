const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.js'],
    print: ['./src/print.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    //new CleanWebpackPlugin(['dist']),
    
    new HtmlWebpackPlugin({
      title: 'App Index'
    })
    
  ],
  devtool: 'inline-source-map',
  devServer: {
    // Optional: The local file system folder to load static assets from, if there are any
    contentBase: './dist',
    // Optional: The URL browser path where to serve the generated app files (bundles, html files, etc.)
    //publicPath: '/assets/',
    port: 5001,
    open: 'chrome'
  }
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/index.js', 'webpack-hot-middleware/client?path=__webpack_hmr&reload=true'],
    print: ['./src/print.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // The publicPath will be used within the server.js script to make sure files are served correctly on http://localhost:port
    publicPath: '/'
  },
  plugins: [    
    new HtmlWebpackPlugin({
      //hash: true,
      title: 'App Index'
      //myPageHeader: 'Development 2',
      //filename: 'index.html',
      //path: path.resolve(__dirname, 'dist'),
      //template: './src/index.html'
  
    }),
    new webpack.HotModuleReplacementPlugin() 
  ],
  devtool: 'inline-source-map'
};
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // Add 'webpack-hot-middleware/client' into the entry array. This connects to the server
  // to receive notifications when the bundle rebuilds and then updates your client bundle accordingly.
  entry: {
    app: ['webpack-hot-middleware/client', './src/index.jsx'],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    // Add the HotModuleReplacementPlugin to the plugins array
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'dev-bundle.js',
    // The public path that the webpack-dev-middleware is bound to
    publicPath: '/',
  },
});

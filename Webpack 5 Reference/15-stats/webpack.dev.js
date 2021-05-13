const { merge } = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: ['webpack-hot-middleware/client', './src/index.jsx'],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
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
    publicPath: '/',
  },
  performance: {
    // hints options:
    // false = Hide warnings and errors
    // 'warning' = Display a warning on large asset
    // 'error' = Throw error on large asset (Recommended for production mode)
    hints: false,
    // Max size of entry point bundle in bytes (default 250 KiB)
    maxEntrypointSize: 400000,
    // Max size of any emitted file from webpack in bytes
    maxAssetSize: 100000,
  },
});

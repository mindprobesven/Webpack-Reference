const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // Enables inline source map generation
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              // Enables generation of CSS source maps
              sourceMap: true,
            },
          },
          {
            // Compiles Sass to CSS
            loader: 'sass-loader',
            options: {
              // Prefer 'Dart Sass'
              implementation: require('sass'),
              // Enables generation of CSS source maps
              sourceMap: true,
            }
          },
        ],
      },
    ],
  },
});

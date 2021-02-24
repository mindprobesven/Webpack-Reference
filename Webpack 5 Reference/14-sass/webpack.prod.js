const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// The plugins that handle CSS file extraction and minimizing 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  // Enables source map generation
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Instead of style-loader, use the MiniCssExtractPlugin.loader
          MiniCssExtractPlugin.loader,
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
              // Enables generation of CSS source maps
              sourceMap: true,
            }
          },
        ],
      },
    ],
  },
  plugins: [
    // Enable CSS file extration
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // DO NOT FORGET! Extends existing minimizers (i.e. `terser-webpack-plugin`)
      `...`,
      // Enables CSS minifying
      new CssMinimizerPlugin({
        // Enables generation of CSS source maps
        sourceMap: true,
      }),
    ],
  },
});
/*
Webpack - Production
--------------------------------------------------------------------------------

Creating separate webpack configurations for the dev and production environments
--------------------------------------------------------------------------------
1. Install webpack-merge
npm install --save-dev webpack-merge

2. Create webpack.common.js, webpack.dev.js and webpack.prod.js

3. Create NPM scripts in the package.json

"start": "webpack serve --open --config webpack.dev.js",
"build": "webpack --config webpack.prod.js"

Specify the Mode
--------------------------------------------------------------------------------
Many libraries will key off the process.env.NODE_ENV variable to determine what
should be included in the library.

Since webpack v4, specifying mode automatically configures DefinePlugin for you
making the old way obsolete:

new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })

Minification
--------------------------------------------------------------------------------
webpack v4+ will minify your code by default in production mode using the TerserPlugin

Source Mapping
--------------------------------------------------------------------------------
Specifying (devtool: 'source-map') in production enables source maps which are useful
for debugging and running benchmark test.

Minimize CSS
--------------------------------------------------------------------------------
To minify the output, use a plugin like css-minimizer-webpack-plugin
https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
*/

import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  const element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());
/*
Webpack - Output Management
----------------------------------------------------------------------------------------

Splitting bundles by entry points
----------------------------------------------------------------------------------------
1. We have two JS file (index.js and print.js) and we want to split these into two output
bundles [name].bundle.js

2. Add this to the index.html

<script src="./print.bundle.js"></script>
<script src="./index.bundle.js"></script>

3. Edit the webpack.config.js
New entry points:

entry: {
    index: './src/index.js',
    print: './src/print.js',
  },

New output:
filename: '[name].bundle.js',

4. Build using shortcut specified in the package.json
npm run build

Setting up HtmlWebpackPlugin
----------------------------------------------------------------------------------------
To avoid having to update the index.html manually to specify bundles, etc. the
HtmlWebpackPlugin automized this process. It automatically generates the index.html

1. Install the HtmlWebpackPlugin as dev dependency
npm install --save-dev html-webpack-plugin

2. Update the webpack.config.js
Require the HtmlWebpackPlugin

const HtmlWebpackPlugin = require('html-webpack-plugin');

Add under entry:

plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],

3. Build using shortcut specified in the package.json
npm run build

4. The index.html is automatically generated and all the bundles are added.

Cleaning the /dist folder
----------------------------------------------------------------------------------------
To automatically clean the dist folder before each build use the clean-webpack-plugin

1. Install the clean-webpack-plugin as dev dependency
npm install --save-dev clean-webpack-plugin

2. Update the webpack.config.js
Require the clean-webpack-plugin

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

Add under entry:

plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],

3. Build using shortcut specified in the package.json
npm run build

4. The /dist folder is now cleaned before a build.
*/

import _ from 'lodash';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
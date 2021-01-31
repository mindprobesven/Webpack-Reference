/*
Webpack - Caching
----------------------------------------------------------------------------------------
To make use of browser caching, generated chunk filenames can have unique hashes. Chunks
are reused and loaded from cache unless they change and get a new hash.

[name].[contenthash].js

1. The [contenthash] substitution will add a unique hash based on the content of an asset.
When the asset's content changes, [contenthash] will change as well.

Add to webpack.config.js in output:

filename: '[name].[contenthash].js',

2. Extracting the boilerplate. Webpack provides an optimization feature to split runtime
code into a separate chunk using the optimization.runtimeChunk option. Set it to single
to create a single runtime bundle for all chunks:

Add to webpack.config.js under output:

optimization: {
     runtimeChunk: 'single',
   },

3. Create a vendors chunk, which includes all code from node_modules in the whole application.

Add to webpack.config.js in optimization:

moduleIds: 'deterministic',
splitChunks: {
       cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all',
         },
       },
     },

4. Build and observe how in /dist the chunks are created with a unique hash.
npm run build
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
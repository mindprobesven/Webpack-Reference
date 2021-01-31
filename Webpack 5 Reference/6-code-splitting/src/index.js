/*
Webpack - Code Splitting
----------------------------------------------------------------------------------------
Code splitting allows to split code into various bundles which can then be loaded on 
demand or in parallel. It can be used to achieve smaller bundles and control resource
load prioritization which, if used correctly, can have a major impact on load time.

There are three general approaches to code splitting available:

- Entry Points: Manually split code using entry configuration.
- Prevent Duplication: Use Entry dependencies or SplitChunksPlugin to dedupe and split chunks.
- Dynamic Imports: Split code via inline function calls within modules

Entry points
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

Pitfalls: If there are any duplicated modules between entry chunks they will be included
in both bundles. 

SplitChunksPlugin
----------------------------------------------------------------------------------------
Allows us to extract common dependencies into an existing entry chunk or an entirely new
chunk.

1. In this example both index.js and print.js import lodash

2. Add to the webpack.config.js

optimization: {
     splitChunks: {
       chunks: 'all',
     },
   },

3. Build
npm run build

3. Check this /dist folder and notice how lodash is now a separate chunk.
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
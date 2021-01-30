/*
Webpack - Development
----------------------------------------------------------------------------------------
1. Set mode to development. In the webpack.config.js add above entry:

mode: 'development',

Adding a source map to enable debugging
----------------------------------------------------------------------------------------
1. For debugging, source maps are crucial as they map your compiled code back to your
original source code instead of the generated bundle files. There are serveral source
map options, one being inline-source-map. It should only be used in development mode
as it increases the bundle filesize a lot.

2. Add to webpack.config.js

devtool: 'inline-source-map',

Using webpack-dev-server
----------------------------------------------------------------------------------------
The webpack-dev-server provides you with a simple web server and the ability to use live
reloading.

1. Install the webpack-dev-server dev dependency
npm install --save-dev webpack-dev-server

2. Add to webpack.config.js under devtool:

 devServer: {
    contentBase: './dist',
  },

This tells webpack-dev-server to serve the files from the dist directory on localhost:8080

3. Add to package.json in scripts:

"start": "webpack serve --open",

4. With npm start we can run the dev server, it will automatically open the app in the
browser and refresh on source changes.

npm start
*/

import _ from 'lodash';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!!!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
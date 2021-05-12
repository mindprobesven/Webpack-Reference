/*
Webpack - webpack-dev-middleware
----------------------------------------------------------------------------------------
Instead of using the webpack-dev-server, another option is the webpack-dev-middleware
which is a wrapper that will emit files processed by webpack to a server such as express.

1. Install express and webpack-dev-middleware dependencies
npm install --save-dev express webpack-dev-middleware

2. Add to webpack.config.js in output:

publicPath: '/',

The publicPath will be used within our server script as well in order to make sure files
are served correctly.

3. Add to package.json in scripts:

"server": "node server.js",

4. Run the express server

npm run server

5. The app now opens in the browser at localhost:3000 and will update on source
changes using the express server (server.js).
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
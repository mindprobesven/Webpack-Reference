/*
Webpack - Setup
--------------------------------------------------------------------------------
1. Create a package.json:
npm init -y

2. Install webpack packages
npm install webpack webpack-cli --save-dev

3. Create a ./dist directory
This distribution code is the minimized and optimized output of the build process.

4. Installing dependencies
npm install --save lodash
npm install --save-dev lodash

5. Compile and build
npx webpack

The build version is now in ./dist and can be opened in the browser

6. Create a webpack.config.js configuration file in root

7. Compile and build using the config file
npx webpack --config webpack.config.js

8. Setup a shortcut to run wepback builds in the package.json

"scripts": {
    "build": "webpack"
  }

9. Compile and build using the shortcut
npm run build


*/

import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
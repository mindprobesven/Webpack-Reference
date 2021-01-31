/*
Webpack - Environment Variables
----------------------------------------------------------------------------------------
The webpack CLI --env option allows passing environment variables to the webpack.config.js

1. Add to package.json a new script "build-prod" which passes some environmental variables

"build-prod": "webpack --env NODE_ENV=local --env production"

2. To use the env variable, you must convert module.exports to a function in webpack.config.js

3. Build and observe the console output from the webpack.config.js
npm run build-prod
*/

import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
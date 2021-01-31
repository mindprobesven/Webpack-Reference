/*
Webpack - Hot Module Replacement
----------------------------------------------------------------------------------------
Allows all kinds of modules to be updated at runtime without the need for a full refresh.

1. Add to webpack.config.js in devServer:

hot: true,

2. Update the index.js file so that when a change inside print.js is detected we tell 
webpack to accept the updated module.

3. Start the dev server

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

// The old code
// document.body.appendChild(component());

// The new HMR code which can re-render on changes in the print.js
let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}

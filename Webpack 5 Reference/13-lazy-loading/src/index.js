/*
Webpack - Lazy Loading
----------------------------------------------------------------------------------------
Entire modules can be loaded on demand (lazy-loaded).

This example lazy-loads the print.js module after a user interaction (clicking on a button).

During build, a separate chunk is created for the print.js module.
*/

import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => import(/* webpackChunkName: "print" */ './print')
  .then(module => {
    const print = module.default;
    print();
 });

  return element;
}

document.body.appendChild(component());
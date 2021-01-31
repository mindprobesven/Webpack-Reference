/*
Webpack - Dynamic Imports
----------------------------------------------------------------------------------------
Dynamic imports create a separate chunk in /dist. This chunk is not automatically added
to the index.html and loaded on page load. Instead, the chunk is loaded dynamically only
when a module is requested that is importing the chunk dynamically.

In the example below, loadash is dynamically imported. During build, a separate chunk is
created for loadash in /dist, but not included in the index.html. The chunk is not loaded
at page load, instead it is loaded dynamically on demand.
*/

async function getComponent() {
  const element = document.createElement('div');

  // instead of statically importing lodash, we'll use dynamic importing to separate a chunk
  const { default: _ } = await import('lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});

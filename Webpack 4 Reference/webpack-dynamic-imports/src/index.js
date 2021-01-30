function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Sven'], ' ');
    return element;
  }).catch(error => console.log('Error loading component'));
}

getComponent().then(component => {
  document.body.appendChild(component);
});
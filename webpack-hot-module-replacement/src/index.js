import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'Sven'], ' ');

  btn.innerHTML = 'Click Me!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

// We store the element to re-render on print.js changes
let element = component();
document.body.appendChild(element);

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    
    // Re-render the component to update the button click handler
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}
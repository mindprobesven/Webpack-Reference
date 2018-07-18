import _ from 'lodash';
import Print from './print';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'Sven'], ' ');

  var button = document.createElement('button');

  button.innerHTML = 'Click Me';
  button.onclick = Print.bind(null, 'Hello Sven');

  element.appendChild(button);
 
  return element;
}

document.body.appendChild(component());
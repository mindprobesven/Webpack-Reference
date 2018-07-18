import printMe from './print.js';
import { cube } from './math.js';

function component() {
  var element = document.createElement('div');

  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');
  
  printMe();

  return element;
}

document.body.appendChild(component());
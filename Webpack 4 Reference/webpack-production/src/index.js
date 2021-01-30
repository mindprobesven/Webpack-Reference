import printMe from './print.js';
import { cube } from './math.js';

if(process.env.NODE_ENV !== 'production') {
  console.log('Running in development mode!');
}

function component() {
  var element = document.createElement('div');

  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');
  
  printMe();

  return element;
}

document.body.appendChild(component());
import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'Sven'], ' ');

  btn.innerHTML = 'Click Me!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component();
document.body.appendChild(element);
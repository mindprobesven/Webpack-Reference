import _ from 'lodash';
import printMe from './print.js';
import { sayHello } from './es6-module';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'Thomas'], ' ');

  btn.innerHTML = 'Click Me!';
  btn.onclick = printMe;

  element.appendChild(btn);

  console.log(sayHello('Sven'));

  return element;
}

document.body.appendChild(component());

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

getPosts().then(posts => console.log(posts));
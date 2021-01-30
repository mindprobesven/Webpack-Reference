import _ from 'lodash';
import './style.css';
import CityImage from './image.jpg';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Sven'], ' ');
  element.classList.add('hello');

  var image = new Image();
  image.src = CityImage;
  element.appendChild(image);

  return element;
}

document.body.appendChild(component());
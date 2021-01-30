/*
Webpack - Asset Management
----------------------------------------------------------------------------------------
1. Install all dependencies
npm install

Loading CSS
----------------------------------------------------------------------------------------
1. In order to import a CSS file from within a JavaScript module, you need to install
and add the style-loader and css-loader to your module configuration:

npm install --save-dev style-loader css-loader

2. Add to the webpack.config.js
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

The order of loaders ['style-loader', 'css-loader'] is crucial. They are executed in
order!

3. Build using shortcut specified in the package.json
npm run build

4. Open the index.html from the ./dist folder in the browser to see the css now applied.

Loading Images
----------------------------------------------------------------------------------------
1. With Webpack 5 it is possible to import images using the built-in "Asset Module"
Add to the webpack.config.js

module: {
     rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     ],
   },

2. Build using shortcut specified in the package.json
npm run build

4. Open the index.html from the ./dist folder in the browser to see the css now applied.

5. In the ./dist directory you can see the actual filename of the image has changed to
something like 29822eaa871e8eadeaa4.png

Loading Fonts
----------------------------------------------------------------------------------------
1. The Asset Modules will take any file you load through them and output it to the
build directory. Update the webpack.config.js to handle font files:

module: {
     rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     ],
   },

2. Build using shortcut specified in the package.json
npm run build

3. Open the index.html from the ./dist folder in the browser to see the font now applied.

5. In the ./dist directory you can see the actual filename of the fonts has changed to
something like 29822eaa871e8eadeaa4.woff
*/

import _ from 'lodash';

// Import css files
import './style.css';

// Import image files
import Icon from './image.jpg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Use the imported css
  element.classList.add('hello');

  // Use the imported image
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
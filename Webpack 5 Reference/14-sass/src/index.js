/*
Webpack - SASS
--------------------------------------------------------------------------------

Loading Sass / SCSS files
1. Install dev dependencies sass-loader and sass (Dart Sass)
npm install sass-loader sass webpack --save-dev

Setup for development mode
--------------------------------------------------------------------------------
Look at webpack.dev.js for configuration

Setup for production mode
--------------------------------------------------------------------------------
- For production builds it's recommended to extract the CSS from your bundle being
able to use parallel loading of CSS/JS resources later on. By default, it creates a
CSS file per JS file which contains CSS. You can also extract in one CSS file using
optimization.splitChunks.cacheGroups, explained at:
https://webpack.js.org/plugins/mini-css-extract-plugin/#extracting-all-css-in-a-single-file

1. Install dev dependency mini-css-extract-plugin
npm install --save-dev mini-css-extract-plugin

2. Configure the webpack.prod.js to use the mini-css-extract-plugin
Look at webpack.prod.js for configuration

- To make debugging easier, it is possible to generate CSS source maps

1. Configure the webpack.prod.js to generate CSS source maps
Look at webpack.prod.js for configuration

- To optimize and minify CSS use the css-minimizer-webpack-plugin

1. Install dev dependency css-minimizer-webpack-plugin
npm install --save-dev css-minimizer-webpack-plugin

2. Configure the webpack.prod.js to use the css-minimizer-webpack-plugin
Look at webpack.prod.js for configuration
*/

import './style.scss';

console.log(`Mode: ${process.env.NODE_ENV}`)

function component() {
  const element = document.createElement('H1');
  const text = document.createTextNode('SASS (SCSS)')

  element.appendChild(text);

  return element;
}

document.body.appendChild(component());

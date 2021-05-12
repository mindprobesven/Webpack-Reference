/* eslint-disable no-unused-vars */
/*
----------------------------------------------------------------------------------------

Setting up a custom Webpack development server with Express

Instead of using the webpack-dev-server, it is possible to create a custom webpack
development server with Express using the webpack-dev-middleware.

This example explains how to;
- Create the custom Webpack Development Express server
- Enable Hot Module Reloading
- Enable the historyApiFallback for React Router support

---------------------------------------------

- Requires (webpack-dev-middleware)
A wrapper that will emit files processed by webpack to an express server.
npm install --save-dev webpack-dev-middleware

---------------------------------------------

- Requires (webpack-hot-middleware) for HMR
Adds hot reloading into an existing server without webpack-dev-server.
npm install --save-dev webpack-hot-middleware

1. Add the following plugins to the plugins array
./webpack.dev.js
plugins: [
  new webpack.HotModuleReplacementPlugin(),
],

2. Add 'webpack-hot-middleware/client' into the entry array. This connects to the server
to receive notifications when the bundle rebuilds and then updates your client bundle accordingly.
./webpack.dev.js
entry: {
  app: ['webpack-hot-middleware/client', './src/index.jsx'],
},

---------------------------------------------

- Requires (connect-history-api-fallback) for React Router support
Middleware to proxy requests through a specified index page, useful for Single Page
Applications that utilise the HTML5 History API.
npm install --save-dev connect-history-api-fallback

---------------------------------------------

- Running the server
./package.json
"server-dev": "nodemon ./servers/dev-server.js"

npm run server-dev
----------------------------------------------------------------------------------------
*/

const express = require('express');

const history = require('connect-history-api-fallback');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
// Grab the configuration from the webpack.dev.js
const config = require('../webpack.dev.js');

// Pass it to webpack and create a compiler
const compiler = webpack(config);

// Custom middleware to log each request the server receives
const requestLogger = (req, res, next) => {
  console.log(req.path);
  next();
};

const app = express();
const port = 3000;

app.use(requestLogger);

// Add the connect-history-api-fallback middleware to enable historyApiFallback
// needed for React Router support.
app.use(history());

// Add webpackDevMiddleware with the compiler and a set of options
app.use(webpackDevMiddleware(compiler, {
  // The public path that the webpack-dev-middleware is bound to
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

// Add webpack-hot-middleware attached to the same compiler instance
app.use(webpackHotMiddleware(compiler));

app.get('/computers', (req, res) => {
  console.log('HERE');
});

app.listen(port, () => {
  console.log('-'.repeat(60));
  console.log(`Development server running at http://localhost:${port}`);
  console.log('-'.repeat(60));
});

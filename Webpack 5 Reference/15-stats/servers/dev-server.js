/* eslint-disable no-unused-vars */
/*
----------------------------------------------------------------------------------------

Webpack Stats and Performance options

Stats
-----
The stats option lets you precisely control what bundle build information gets displayed.

[USAGE]
- Production webpack configuration file:
./ webpack.prod.js

module.exports = {
  //...
  stats: { ... },
};

- webpack-dev-server
./webpack.dev.js

devServer: {
  //...
  stats: { ... },
}

- webpack-dev-middleware
./servers/dev-server.js

Explained below

[OPTIONS]
List at https://webpack.js.org/configuration/stats/

----------------------------------------------------------------------------------------

Performance
-----------
Control how webpack notifies you of assets and entry points that exceed a specific file limit.

./webpack.dev.js and ./ webpack.prod.js get their own performance configurations
performance: {
  hints: false,
  maxEntrypointSize: 400000,
  maxAssetSize: 100000,
},

Outputs something like this when a specified max filesize limit is exceeded.
ℹ ｢wdm｣: asset dev-bundle.js 3.47 MiB [emitted] [big] (name: app)

Example:
./webpack.dev.js
----------------------------------------------------------------------------------------
*/

const express = require('express');

const history = require('connect-history-api-fallback');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../webpack.dev.js');

const compiler = webpack(config);

const requestLogger = (req, res, next) => {
  // console.log(req.path);
  next();
};

const app = express();
const port = 3000;

app.use(requestLogger);

app.use(history());

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    // Sets the preset for the type of information that gets displayed.
    preset: 'errors-warnings',
    // Tells stats whether to output in the different colors.
    colors: true,
    performance: true,
    // Tells stats whether to display the entry points with the corresponding bundles.
    entrypoints: true,
    // Tells stats whether to show the asset information. Set stats.assets to false to hide it.
    assets: true,
    // Tells stats whether to add information about the built modules.
    modules: false,
  },
}));

app.use(webpackHotMiddleware(compiler));

app.listen(port, () => {
  console.log('-'.repeat(60));
  console.log(`Development server running at http://localhost:${port}`);
  console.log('-'.repeat(60));
});

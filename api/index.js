const config = require('./config/config');
const app = require('./config/express');

const debug = require('debug')('accountkit:index');

// make bluebird default Promise
Promise = require('bluebird');

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, () => debug(`server started on port http://localhost:${config.port} (${config.env})`));
}

module.exports = app;
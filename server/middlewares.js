'use strict';

const defineMiddlewares = (app) => {
  app.use('/screens', require('./api/movieScreen'));
}

module.exports = defineMiddlewares;
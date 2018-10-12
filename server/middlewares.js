'use strict';
import bodyParser from 'body-parser';
import movieScreen from './api/movieScreen';

const defineMiddlewares = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use('/screens', movieScreen);
}

module.exports = defineMiddlewares;
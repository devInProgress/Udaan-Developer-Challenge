'use strict';

import Promise from 'bluebird';
import { movie_screen as MovieScreen } from '../../dbModels';

Promise.promisifyAll(MovieScreen);

const dao_functions = {};

dao_functions.saveMovieScreen = (movieScreen) => {
  return movieScreen.saveAsync();
}

module.exports = dao_functions;

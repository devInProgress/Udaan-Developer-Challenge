'use strict';

import { movieScreen as DbaMovieScreen } from '../../dbAccessLayers';

const dml_functions = {};

dml_functions.createMovieScreen = (movieScreen) => {
  if (!movieScreen) {
    return 'Movie Screen Information is required';
  }
  return DbaMovieScreen.saveMovieScreen(movieScreen);
};

module.exports = dml_functions;


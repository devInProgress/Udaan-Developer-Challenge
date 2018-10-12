'use strict';

import DbaMovieScreen from '../../dbAccessLayers/movieScreen';

const dml_functions = {};

dml_functions.createMovieScreen = (movieScreen) => {
  if (!movieScreen) {
    return 'Movie Screen Information is required';
  }
  return DbaMovieScreen.createMovieScreen(movieScreen);
};

module.exports = dml_functions;


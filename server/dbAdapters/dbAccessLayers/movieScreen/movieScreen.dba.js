'use strict';

import { movie_screen as MovieScreen } from '../../dbModels';

const dao_functions = {};

dao_functions.saveMovieScreen = (movieScreen) => {
  const newMovieScreen = new MovieScreen(movieScreen);
  return newMovieScreen.save();
}

module.exports = dao_functions;

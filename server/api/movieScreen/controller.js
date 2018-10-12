'use strict';

import MovieScreenDbm from '../../dbAdapters/dbManipulationLayers/movieScreen';

const controller = {};

controller.createMovieScreen = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send('name not provided');
  }
  const movieScreenDetails = req.body;
  return MovieScreenDbm.createMovieScreen(movieScreenDetails);
}

module.exports = controller;
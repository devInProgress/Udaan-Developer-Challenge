'use strict';

import MovieScreenDbm from '../../dbAdapters/dbManipulationLayers/movieScreen';

const controller = {};

controller.createMovieScreen = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send('name not provided');
  }
  const movieScreenDetails = req.body;
  MovieScreenDbm.createMovieScreen(movieScreenDetails)
    .then(result => {
      return res.send(result);
    })
    .catch(error => {
      return res.send(error);
    })
}

module.exports = controller;
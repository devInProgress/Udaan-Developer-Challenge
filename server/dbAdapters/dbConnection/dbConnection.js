'use strict';

import mongoose from 'mongoose';
import Promise from 'bluebird';

const connectToDatabase = () => {
  mongoose.Promise = Promise;
  mongoose.connect('mongodb://naved1234:welcome700@ds131323.mlab.com:31323/movie-screen',
  { useNewUrlParser: true }, () => console.log('Connected to the Database'));
}

module.exports = connectToDatabase;
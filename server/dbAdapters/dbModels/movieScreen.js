"use strict";

import mongoose from 'mongoose';

const { Schema } = mongoose;

const MovieScreenSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  seatInfo: {
    A: {
      numberOfSeats: {
        type: Number
      },
      aisleSeats: {
        type: [Number]
      }
    },
    B: {
      numberOfSeats: {
        type: Number
      },
      aisleSeats: {
        type: [Number]
      }
    },
    D: {
      numberOfSeats: {
        type: Number
      },
      aisleSeats: {
        type: [Number]
      }
    }
  }
});

module.exports = mongoose.model('moviescreen', MovieScreenSchema);
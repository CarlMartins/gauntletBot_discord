const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
  playerName: {
    type: String,
    required: true
  },
  gauntletPoints: {
    type: String,
    default: 0
  },
  shuffledTimes: {
    type: String,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  sleepTimeStart: {
    type: Date,
    default: 00
  },
  sleepTimeEnd: {
    type: Date,
    default: 00
  },
  createdAt:
  {
    type: Date,
    default: Date.now()
  }
});

const playerModel = mongoose.model('Player', playerSchema);

module.exports = { playerModel };

playerModel.on;
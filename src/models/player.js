const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
  playerName: {
    type: String,
    required: true
  },
  shufflePoints: {
    type: Number,
    default: 0
  },
  shuffledTimes: {
    type: Number,
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

const PlayerModel = mongoose.model('Players', playerSchema);

module.exports = { PlayerModel };

PlayerModel.on;
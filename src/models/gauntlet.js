const mongoose = require('mongoose');
const { Schema } = mongoose;

const GauntletSchema = new Schema({
  ornAmount: {
    type: Number,
    required: true
  },
  winDate: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

const GauntletModel = mongoose.model("Gauntlets", GauntletSchema);

module.exports = { GauntletModel };
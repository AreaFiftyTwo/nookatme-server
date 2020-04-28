const mongoose = require('mongoose');

const umbrellaSchema = new mongoose.Schema({
  name: String,
  diy: String,
  buy: String,
  sell: Number,
  color1: String,
  color2: String,
  size: String,
  source: String,
  sourceNotes: String,
  version: String,
  catalog: String,
  filename: String,
  internalId: Number
})

module.exports = mongoose.model('umbrellas', umbrellaSchema);

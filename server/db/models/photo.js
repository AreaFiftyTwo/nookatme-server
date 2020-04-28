const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  name: String,
  variation: String,
  bodyTitle: String,
  pattern: String,
  patternTitle: String,
  diy: String,
  customize: String,
  kitCost: Number,
  buy: String,
  sell: Number,
  size: String,
  source: String,
  version: String,
  style: String,
  catalog: String,
  filename: String,
  variantId: String,
  internalId: Number
})

module.exports = mongoose.model('photos', photoSchema);

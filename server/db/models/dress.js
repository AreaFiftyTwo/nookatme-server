const mongoose = require('mongoose');

const dressSchema = new mongoose.Schema({
  name: String,
  variation: String,
  diy: String,
  buy: String,
  sell: Number,
  color1: String,
  color2: String,
  size: String,
  source: String,
  version: String,
  style: String,
  catalog: String,
  primaryShape: String,
  secondaryShape: String,
  filename: String,
  internalId: Number
})

module.exports = mongoose.model('dresses', dressSchema);

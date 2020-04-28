const mongoose = require('mongoose');

const topSchema = new mongoose.Schema({
  name: String,
  variation: String,
  diy: String,
  buy: String,
  sell: Number,
  color1: String,
  color2: String,
  size: String,
  source: String,
  sourceNotes: String,
  version: String,
  style: String,
  catalog: String,
  filename: String,
  internalId: Number
})

module.exports = mongoose.model('tops', topSchema);

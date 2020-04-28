const mongoose = require('mongoose');

const posterSchema = new mongoose.Schema({
  name: String,
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

module.exports = mongoose.model('posters', posterSchema);

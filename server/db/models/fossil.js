const mongoose = require('mongoose');

const fossilSchema = new mongoose.Schema({
  name: String,
  buy: String,
  sell: Number,
  color1: String,
  color2: String,
  size: String,
  source: String,
  version: String,
  interact: String,
  catalog: String,
  filename: String,
  internalId: Number
})

module.exports = mongoose.model('fossils', fossilSchema);

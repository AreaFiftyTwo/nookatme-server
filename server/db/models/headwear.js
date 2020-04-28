const mongoose = require('mongoose');

const headwearSchema = new mongoose.Schema({
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
  labelThemes: String,
  catalog: String,
  filename: String,
  internalId: Number,
  uniqueEntryId: String
})

module.exports = mongoose.model('headwear', headwearSchema, 'headwear');

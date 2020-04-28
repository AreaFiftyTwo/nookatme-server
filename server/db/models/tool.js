const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
  name: String,
  variation: String,
  bodyTitle: String,
  diy: String,
  customize: String,
  kitCost: String,
  uses: String,
  buy: String,
  sell: Number,
  color1: String,
  color2: String,
  size: String,
  set: String,
  source: String,
  sourceNotes: String,
  version: String,
  style: String,
  catalog: String,
  filename: String,
  variantId: String,
  internalId: Number
})

module.exports = mongoose.model('tools', toolSchema);

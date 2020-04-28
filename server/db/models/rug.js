const mongoose = require('mongoose');

const rugSchema = new mongoose.Schema({
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
  hhaConcept1: String,
  hhaConcept2: String,
  hhaSeries: String,
  tag: String,
  catalog: String,
  filename: String,
  internalId: Number
})

module.exports = mongoose.model('rugs', rugSchema);

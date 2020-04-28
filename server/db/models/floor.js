const mongoose = require('mongoose');

const floorSchema = new mongoose.Schema({
  name: String,
  vfx: String,
  diy: String,
  buy: String,
  sell: Number,
  color1: String,
  color2: String,
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

module.exports = mongoose.model('floors', floorSchema);

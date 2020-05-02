const mongoose = require('mongoose');

const miscSchema = new mongoose.Schema({
  name: String,
  variation: String,
  bodyTitle: String,
  pattern: String,
  patternTitle: String,
  diy: String,
  bodyCustomize: String,
  patternCustomize: String,
  kitCost: String,
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
  hhaSet: String,
  interact: String,
  tag: String,
  speakerType: String,
  lightingType: String,
  catalog: String,
  filename: String,
  variantId: String,
  internalId: Number
})

module.exports = mongoose.model('misc', miscSchema, 'misc');

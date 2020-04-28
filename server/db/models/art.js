const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
  name: String,
  genuine: String,
  category: String,
  buy: String,
  sell: Number,
  color1: String,
  color2: String,
  size: String,
  realArtworkTitle: String,
  artist: String,
  museumDesc: String,
  source: String,
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
  internalId: Number,
  uniqueEntryId: String
})

module.exports = mongoose.model('art', artSchema, 'art');

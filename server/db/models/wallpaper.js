const mongoose = require('mongoose');

const wallpaperSchema = new mongoose.Schema({
  name: String,
  vfx: String,
  vfxType: String,
  diy: String,
  buy: String,
  sell: Number,
  source: String,
  sourceNotes: String,
  catalog: String,
  windowType: String,
  windowColor: String,
  paneType: String,
  curtainType: String,
  curtainColor: String,
  ceilingType: String,
  color1: String,
  color2: String,
  version: String,
  hhaConcept1: String,
  hhaConcept2: String,
  hhaSeries: String,
  tag: String,
  version: String,
  filename: String,
  internalId: Number
})

module.exports = mongoose.model('wallpapers', wallpaperSchema);

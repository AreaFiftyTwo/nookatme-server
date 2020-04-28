const mongoose = require('mongoose');

const fishSouthSchema = new mongoose.Schema({
  num: Number,
  name: String,
  sell: Number,
  wherehow: String,
  shadow: String,
  rarity: String,
  rainsnowCatchUp: String,
  startTime: String,
  endTime: String,
  jan: String,
  feb: String,
  mar: String,
  apr: String,
  may: String,
  jun: String,
  jul: String,
  aug: String,
  sep: String,
  oct: String,
  nov: String,
  dec: String,
  color1: String,
  color2: String,
  size: String,
  lightingType: String,
  itemFilename: String,
  internalId: Number
})

module.exports = mongoose.model('fish-south', fishSouthSchema, 'fish-south');

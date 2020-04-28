const mongoose = require('mongoose');

const bugSouthSchema = new mongoose.Schema({
  num: Number,
  name: String,
  sell: Number,
  wherehow: String,
  weather: String,
  rarity: String,
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
  itemFilename: String,
  internalId: Number
})

module.exports = mongoose.model('bugs-south', bugSouthSchema, 'bugs-south');

const mongoose = require('mongoose');

const fencingSchema = new mongoose.Schema({
  name: String,
  diy: String,
  buy: String,
  sell: Number,
  source: String,
  sourceNotes: String,
  version: String,
  filename: String,
  internalId: Number
})

module.exports = mongoose.model('fencing', fencingSchema, 'fencing');

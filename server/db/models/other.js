const mongoose = require('mongoose');

const otherSchema = new mongoose.Schema({
  name: String,
  buy: String,
  sell: String,
  source: String,
  tag: String,
  version: String,
  filename: String,
  internalId: Number
})

module.exports = mongoose.model('other', otherSchema, 'other');

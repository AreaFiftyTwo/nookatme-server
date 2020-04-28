const mongoose = require('mongoose');

const nookMileSchema = new mongoose.Schema({
  name: String,
  nookMiles: Number,
  category: String,
  filename: String,
  internalId: Number
})

module.exports = mongoose.model('nook-miles', nookMileSchema);

const mongoose = require('mongoose');

const constructionSchema = new mongoose.Schema({
  bridge: String,
  buy: Number,
  category: String,
  source: String
})

module.exports = mongoose.model('construction', constructionSchema, 'construction');

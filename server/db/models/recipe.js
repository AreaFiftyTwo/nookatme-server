const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  amt1: Number,
  material1: String,
  amt2: Number,
  material2: String,
  amt3: Number,
  material3: String,
  amt4: Number,
  material4: String,
  amt5: Number,
  material5: String,
  amt6: Number,
  material6: String,
  sources: String,
  sourceNotes: String,
  version: String,
  category: String,
  uniqueEntryId: String,
})

module.exports = mongoose.model('recipes', recipeSchema);

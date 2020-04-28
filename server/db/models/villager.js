const mongoose = require('mongoose');

const villagerSchema = new mongoose.Schema({
  name: String,
  species: String,
  gender: String,
  personality: String,
  birthday: String,
  catchphrase: String,
  style1: String,
  style2: String,
  filename: String
})

module.exports = mongoose.model('villagers', villagerSchema);

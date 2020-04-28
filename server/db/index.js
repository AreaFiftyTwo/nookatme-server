const mongoose = require('mongoose');
require('./models/fencing');
require('./models/art');
require('./models/accessory');
require('./models/bag');
require('./models/bugNorth');
require('./models/bugSouth');
require('./models/construction');
require('./models/dress');
require('./models/fishNorth');
require('./models/fishSouth');
require('./models/floor');
require('./models/fossil');
require('./models/headwear');
require('./models/houseware');
require('./models/misc');
require('./models/music');
require('./models/nookMile');
require('./models/other');
require('./models/photo');
require('./models/poster');
require('./models/recipe');
require('./models/rug');
require('./models/shoe');
require('./models/sock');
require('./models/tool');
require('./models/top');
require('./models/umbrella');
require('./models/villager');
require('./models/wallmounted');
require('./models/wallpaper');

mongoose.connect('mongodb://localhost/nookatme', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db
  .once('open', () => {
    console.log('Connected to MongoDB')
  })
  .on('error', error => {
    console.log('error:', error)
  })

module.exports = { db: db }

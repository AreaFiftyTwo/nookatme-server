const mongoose = require('mongoose');
const Fencing = require('./models/fencing');
const Art = require('./models/art');
const Accessory = require('./models/accessory');
const Bag = require('./models/bag');
const Bottom = require('./models/bottom');
const BugNorth = require('./models/bugNorth');
const BugSouth = require('./models/bugSouth');
const Construction = require('./models/construction');
const Dress = require('./models/dress');
const FishNorth = require('./models/fishNorth');
const FishSouth = require('./models/fishSouth');
const Floor = require('./models/floor');
const Fossil = require('./models/fossil');
const Headwear = require('./models/headwear');
const Houseware = require('./models/houseware');
const Misc = require('./models/misc');
const Music = require('./models/music');
const NookMile = require('./models/nookMile');
const Other = require('./models/other');
const Photo = require('./models/photo');
const Poster = require('./models/poster');
const Recipe = require('./models/recipe');
const Rug = require('./models/rug');
const Shoe = require('./models/shoe');
const Sock = require('./models/sock');
const Tool = require('./models/tool');
const Top = require('./models/top');
const Umbrella = require('./models/umbrella');
const Villager = require('./models/villager');
const Wallmounted = require('./models/wallmounted');
const Wallpaper = require('./models/wallpaper');
const User = require('./models/user');

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

module.exports = { db, Fencing, Accessory, Art, Bag, Bottom, BugNorth, BugSouth, Construction, Dress, FishNorth, FishSouth, Floor, Fossil, Headwear, Houseware, Misc, Music, NookMile, Other, Photo, Poster, Recipe, Rug, Shoe, Sock, Tool, Top, Umbrella, Villager, Wallmounted, Wallpaper, User }

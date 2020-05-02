const accessories = require('./ACNHdata/accessories.json');
const art = require('./ACNHdata/art.json');
const bags = require('./ACNHdata/bags.json');
const bottoms = require('./ACNHdata/bottoms.json');
const bugsNorth = require('./ACNHdata/bugs-north.json');
const bugsSouth = require('./ACNHdata/bugs-south.json');
const construction = require('./ACNHdata/construction.json');
const dresses = require('./ACNHdata/dresses.json');
const fencing = require('./ACNHdata/fencing.json');
const fishNorth = require('./ACNHdata/fish-north.json');
const fishSouth = require('./ACNHdata/fish-south.json');
const floors = require('./ACNHdata/floors.json');
const fossils = require('./ACNHdata/fossils.json');
const headwear = require('./ACNHdata/headwear.json');
const housewares = require('./ACNHdata/housewares.json');
const misc = require('./ACNHdata/misc.json');
const music = require('./ACNHdata/music.json');
const nookMiles = require('./ACNHdata/nook-miles.json');
const other = require('./ACNHdata/other.json');
const photos = require('./ACNHdata/photos.json');
const posters = require('./ACNHdata/posters.json');
const recipes = require('./ACNHdata/recipes.json');
const rugs = require('./ACNHdata/rugs.json');
const shoes = require('./ACNHdata/shoes.json');
const socks = require('./ACNHdata/socks.json');
const tools = require('./ACNHdata/tools.json');
const tops = require('./ACNHdata/tops.json');
const umbrellas = require('./ACNHdata/umbrellas.json');
const villagers = require('./ACNHdata/villagers.json');
const wallmounted = require('./ACNHdata/wallmounted.json');
const wallpapers = require('./ACNHdata/wallpapers.json');

// DB Models
const { Accessory, Art, Bag, Bottom, BugNorth, BugSouth, Construction, Dress, Fencing, FishNorth, FishSouth, Floor, Fossil, Headwear, Houseware, Misc, Music, NookMile, Other, Photo, Poster, Recipe, Rug, Shoe, Sock, Tool, Top, Umbrella, Villager, Wallmounted, Wallpaper } = require('../db/index');
async function seed() {
  try {
    await Accessory.create(accessories);
    await Art.create(art);
    await Bag.create(bags);
    await Bottom.create(bottoms);
    await Fencing.create(fencing);
    await BugNorth.create(bugsNorth);
    await BugSouth.create(bugsSouth);
    await Construction.create(construction);
    await Dress.create(dresses);
    await FishNorth.create(fishNorth);
    await FishSouth.create(fishSouth);
    await Floor.create(floors);
    await Fossil.create(fossils);
    await Headwear.create(headwear);
    await Houseware.create(housewares);
    await Misc.create(misc);
    await Music.create(music);
    await NookMile.create(nookMiles);
    await Other.create(other);
    await Photo.create(photos);
    await Poster.create(posters);
    await Recipe.create(recipes);
    await Rug.create(rugs);
    await Shoe.create(shoes);
    await Sock.create(socks);
    await Tool.create(tools);
    await Top.create(tops);
    await Umbrella.create(umbrellas);
    await Villager.create(villagers);
    await Wallmounted.create(wallmounted);
    await Wallpaper.create(wallpapers);
    console.log('Seed success!');

  } catch (error) {
    console.log('Seed failed: ', error);
  }
}

seed();

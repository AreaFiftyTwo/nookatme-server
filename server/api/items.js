const router = require('express').Router();
const { db } = require('../db/index');

module.exports = router;

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'In game items can be found here.'
  });
});

router.get('/:category/:id', async (req, res, next) => {
  try {
    const item = await db.model(req.params.category).find({"_id": req.params.id});
    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.get('/:category', async (req, res, next) => {
  try {
    const { query } = req;
    const keys = Object.keys(query);

    // check if there are any filtering queries
    const keysStr = keys.join('');
    const filters = {};
    if (keys.length && keysStr !== 'pagelimit' && keysStr !== 'limitpage') {
      console.log('we have a query');
      // queries that apply to all or nearly all items
      if (keys.includes('diy')) {
        filters['diy'] = query.diy;
      }
      if (keys.includes('color')) {
        filters['color1'] = query.color;
        filters['color2'] = query.color;
      }

      // queries for furniture, decor, flooring/wallpaper
      if (keys.includes('bodyCustomize')) {
        filters['bodyCustomize'] = bodyCustomize;
      }
      if (keys.includes('hhaConcept')) {
        filters['hhaConcept1'] = query.hhaConcept;
        filters['hhaConcept2'] = query.hhaConcept;
      }
      if (keys.includes('hhaSeries')) {
        filters['hhaSeries'] = hhaSeries;
      }
      if (keys.includes('patternCustomize')) {
        filters['patternCustomize'] = patternCustomize;
      }
      if (keys.includes('tag')) {
        filters['tag'] = query.tag;
      }
      if (keys.includes('vfx')) {
        filters['vfx'] = query.vfx;
      }

      // queries for clothing
      if (keys.includes('style')) {
        filters['style'] = query.style;
      }
      if (keys.includes('labelThemes')) {
        filters['labelThemes'] = query.labelThemes;
      }
    }

    // pageNum is the nth page of results the user is on
    // limit is the number of items to appear per page
    const pageNum = Math.max(0, Number(query.page) - 1);
    const limit = Number(query.limit) || 50;
    const items = await db.model(req.params.category).find(filters).skip(pageNum * limit).limit(limit);
    res.json(items);
  } catch (error) {
    next(error);
  }
});

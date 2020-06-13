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
    const { query, params } = req;
    const keys = Object.keys(query);

    // check if there are any filtering queries
    const keysStr = keys.join('');
    const filters = {};
    if (keys.length && keysStr !== 'pagelimit' && keysStr !== 'limitpage') {
      for (const key of keys) {
        // variation query
          // front end sends either variation=yes or variation=no
        if (key === 'variation' && query.variation === "no") {
          const { category } = params;

          // variations in housewares can be determined by variantId
          if (category === "housewares") {
            filters['variantId'] = "NA";
            filters['variantId'] = "0_0";
          }

          // variations in clothing, by variation
          if (category === "tops") {
            filters['variation'] = "NA";
            // filters['variation']
          }
        }

        // queries that apply to all or nearly all items
        if (key === 'diy') {
          filters['diy'] = query.diy;
        }
        if (key === 'color') {
          filters['color1'] = query.color;
          filters['color2'] = query.color;
        }

        // queries for furniture, decor, flooring/wallpaper
        if (key === 'bodyCustomize') {
          filters['bodyCustomize'] = bodyCustomize;
        }
        if (key === 'hhaConcept') {
          filters['hhaConcept1'] = query.hhaConcept;
          filters['hhaConcept2'] = query.hhaConcept;
        }
        if (key === 'hhaSeries') {
          filters['hhaSeries'] = hhaSeries;
        }
        if (key === 'patternCustomize') {
          filters['patternCustomize'] = patternCustomize;
        }
        if (key === 'tag') {
          filters['tag'] = query.tag;
        }
        if (key === 'vfx') {
          filters['vfx'] = query.vfx;
        }

        // queries for clothing
        if (key === 'style') {
          filters['style'] = query.style;
        }
        if (key === 'labelThemes') {
          filters['labelThemes'] = query.labelThemes;
        }

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

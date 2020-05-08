const router = require('express').Router();
const { db } = require('../db/index');

module.exports = router;

router.get('/:category/:id', async (req, res, next) => {
  try {
    const item = await db.model(req.params.category).find({"_id": req.params.id});
    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.get('/:category', async (req, res, next) => {
  // search filters:  try {
    // const { query } = req;
    // const keys = Object.keys(query);
    // if (keys.length) {

    //   const items = await db.model(req.params.category).find(query);
    //   res.json(items);
    // } else {
    //   const items = await db.model(req.params.category).find();
    //   res.json(items);
    // }
  try {
    const { query } = req;
    const keys = Object.keys(query);
    if (keys.length > 2) {

      const items = await db.model(req.params.category).find(query);
      res.json(items);
    } else {
      // pageNum is the nth page of results the user is on
      // limit is the number of items to appear per page
      const pageNum = Math.max(0, Number(req.query.page) - 1);
      const limit = Number(req.query.limit) || 50;
      const items = await db.model(req.params.category).find().skip(pageNum * limit).limit(limit);
      res.json(items);
    }
  } catch (error) {
    next(error);
  }
});



router.post('/', (req, res, next) => {
  res.send('Hello post');
});

router.put('/:userId', (req, res, next) => {
  res.send('Hello put');
});

router.delete('/:userId', (req, res, next) => {
  res.send('Goodbye world');
});

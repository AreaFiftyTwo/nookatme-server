const router = require('express').Router();
const { db } = require('../db/index');

module.exports = router;

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'In game items can be found here.'
  });
})

router.get('/:category', async (req, res, next) => {
  try {
    const items = await db.model(req.params.category).find();
    res.json(items);
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

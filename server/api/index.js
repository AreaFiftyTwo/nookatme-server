const router = require('express').Router();

router.use('/items', require('./items'));
router.use('/users', require('./users'));

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'API routes: /items, /users'
  })
})

router.use((req, res, next) => {
  const err = new Error('Oops! Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;

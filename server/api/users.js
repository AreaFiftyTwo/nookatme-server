const router = require('express').Router();
const { User } = require('../db/index');
const mongoose = require('mongoose');

module.exports = router;

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /users'
  })
})

router.post('/', async (req, res, next) => {
  try {
    const user = await new User({
      _id: new mongoose.Types.ObjectId(),
      email: req.body.email,
      password: req.body.password
    }).execPopulate()

    const savedUser = await user.save();
    res.status(201).json({
      message: 'User created successfully!',
      createdUser: savedUser
    })
  } catch (error) {
    next(error);
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (error) {
    next(error);
  }
})

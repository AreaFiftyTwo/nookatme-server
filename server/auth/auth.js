const router = require('express').Router();
const { User } = require('../db/index');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /users'
  })
})

router.post('/signup', async (req, res, next) => {
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
    if (error.code === 11000) {
      res.status(403).send('A user with that email already exists');
    } else {
      next(error);
    }
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

router.post('/login', async (req, res, next) => {
  try {
    const currentUser = await User.findOne({ email: req.body.email });
    if (!currentUser) {
      console.log('User not found with email ', req.body.email);
      res.status(401).send('Incorrect email/password.');
    } else if (!currentUser.correctPassword(req.body.password)) {
      console.log('Incorrect password for user ', req.body.email);
      res.status(401).send('Incorrect password.');
    } else {
      req.login(currentUser, err => {
        if (err) next(err);
        else res.json(currentUser);
      })
    }
  } catch (error) {
    next(error);
  }
})

module.exports = router;

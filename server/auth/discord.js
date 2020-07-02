const router = require('express').Router();
const { User } = require('../db/index');
const mongoose = require('mongoose');
const axios = require('axios');
const queryString = require('querystring');
require('dotenv').config();
const DISCORD_ID = process.env.DISCORD_ID;
const DISCORD_SECRET = process.env.DISCORD_SECRET;
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const redirectUrl = config.discord_url;

router.get('/login', (req, res) => {
  res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${DISCORD_ID}&redirect_uri=${redirectUrl}&response_type=code&scope=identify`);
});

router.get('/callback', async (req, res, next) => {
  try {
    // get access token from discord
    const { code } = req.query;
    if (!code) {
      throw new Error('No code provided');
    }
    const loginData = {
      'client_id': DISCORD_ID,
      'client_secret': DISCORD_SECRET,
      'grant_type': 'authorization_code',
      'code': code,
      'redirect_uri': redirectUrl,
      'scope': 'identify'
    };

    const sentData = await axios.post('https://discordapp.com/api/oauth2/token', queryString.stringify(loginData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    // use token to get user info from discord
    const returnedUser = await axios.get('https://discordapp.com/api/users/@me', {
      headers: {
        'Authorization': `${sentData.data.token_type} ${sentData.data.access_token}`
      }
    });

    // find or create user, then log in
    let currentUser = await User.findOne({ email: returnedUser.data.email });
    if (!currentUser) {
      const { id, username, email, avatar, discriminator } = returnedUser.data;
      const user = await new User({
        _id: new mongoose.Types.ObjectId(),
        username: username,
        email: email,
        avatar: `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`,
        discordUsername: username + "#" + discriminator,
        discordId: id
      }).execPopulate();

      const savedUser = await user.save();
      currentUser = savedUser;
    }
    req.login(currentUser, err => {
      if (err) next(err);
      else res.json(currentUser);
    });
  } catch (error) {
    next(error);
  }
})

module.exports = router;

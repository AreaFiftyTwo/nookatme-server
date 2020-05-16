const router = require('express').Router();
const axios = require('axios');
const queryString = require('querystring');
// const { db } = require('../db/index');
require('dotenv').config();
const DISCORD_ID = process.env.DISCORD_ID;
const DISCORD_SECRET = process.env.DISCORD_SECRET;
const env = process.env.NODE_ENV || 'development';
const redirectUrl = env === 'development'
  ? 'http://localhost:8080/auth/discord/callback'
  : 'https://nookatme-server001.com/auth/discord/callback';

router.get('/login', (req, res) => {
  res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${DISCORD_ID}&redirect_uri=${redirectUrl}&response_type=code&scope=identify`);
});

router.get('/callback', async (req, res) => {
  try {
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
    console.log('sent data?', sentData.data);
  } catch (error) {
    console.error(error);
  }
})

module.exports = router;

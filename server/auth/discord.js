const router = require('express').Router();
const axios = require('axios');
const FormData = require('form-data');
// const { db } = require('../db/index');
require('dotenv').config();
const DISCORD_ID = process.env.DISCORD_ID;
const DISCORD_SECRET = process.env.DISCORD_SECRET;
const env = process.env.NODE_ENV || 'development';
const redirectUrl = env === 'development'
  ? encodeURIComponent('http://localhost:8080/auth/discord/callback')
  : encodeURIComponent('https://nookatme-server001.com/auth/discord/callback');

router.get('/login', (req, res) => {
  res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${DISCORD_ID}&redirect_uri=${redirectUrl}&response_type=code&scope=identify`);
});

router.get('/callback', async (req, res) => {
  try {
    const { code } = req.query;
    // if (!req.query.code) throw new Error('No code provided');
    if (code) {
      const loginData = new FormData();
      // const loginData = new URLSearchParams();
      loginData.append('client_id', DISCORD_ID);
      loginData.append('client_secret', DISCORD_SECRET);
      loginData.append('grant_type', 'authorization_code');
      loginData.append('redirect_uri', redirectUrl);
      loginData.append('scope', 'identify');
      loginData.append('code', code);

      const sentData = await axios.post('https://discordapp.com/api/oauth2/token', loginData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      res.json(sentData);
    }
  } catch (error) {
    console.error(error);
  }
})

// router.get('/', (req, res, next) => {
//   res.status(200).json({
//     // message: 'In game items can be found here.'
//   });
// })

module.exports = router;

require('dotenv').config();

module.exports = {
  "development": {
    "discord_url": "http://localhost:8080/auth/discord/callback"
  },
  "test": {
    "discord_url": "discord_url"
  },
  "production": {
    "discord_url": "https://nookatme-server001.com/auth/discord/callback"
  }
}

const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const cors = require('cors');

const app = express();
app.use(cors());

const get = username => {
  const url = 'https://mobile.twitter.com/' + username;
  return new Promise((resolve, reject) => {
    request(url, (error, res, body) => {
      const $ = cheerio.load(body);

      const selector = `[href="/${username}/followers"]`;
      let followers
      try {
        const followersDiv = $(selector);
        const followersText = followersDiv.text();
        const followers =
        followersText
        .replace('Followers', '')
        .replace(',', '')
        .trim() || 0;
      } catch() {
        followers = 'error :('
      }

      resolve({ followers });
    });
  });
};

app.get('/', async (req, res, next) => {
  const result = await get(req.query.username);
  if (!result) return next(404);
  else next(JSON.stringify(result));
});

var listener = app.listen(3000, () => {
  console.log('Your app is listening on port 3000');
});

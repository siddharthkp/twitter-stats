const instagram = require("./instagram");
const twitter = require("./twitter");
const youtube = require("./youtube");
const cheerio = require("cheerio");
const request = require("request");

const platforms = {
  instagram,
  twitter,
  youtube
};

const scraper = (platform, username) => {
  const { url, parse } = platforms[platform];

  const path = url(username);

  return new Promise((resolve, reject) => {
    request(path, (error, res, body) => {
      setTimeout(function() {
        const $ = cheerio.load(body);

        let followers;

        try {
          followers = parse($, username);
        } catch (error) {
          followers = "error :(";
        }

        resolve({ followers });
      }, 2000);
    });
  });
};

scraper.platforms = Object.keys(platforms);

module.exports = scraper;

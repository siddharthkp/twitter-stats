const express = require("express");
const cors = require("cors");
const nofavicon = require("express-no-favicons");
const scraper = require("./scrapers");

const app = express();
app.use(cors());
app.use(nofavicon());

app.get("/:platform", async (req, res, next) => {
  const platform = req.params.platform;

  if (scraper.platforms.includes(platform)) {
    const result = await scraper(req.params.platform, req.query.username);
    if (!result) return next(404);
    else next(JSON.stringify(result));
  } else {
    return next(404);
  }
});

var listener = app.listen(3000, () => {
  console.log("Your app is listening on port 3000");
});

function parse($) {
  const selector = `.subscribed`;

  const followersDiv = $(selector);

  const followersText = followersDiv.text();

  const followers = followersText.replace(",", "").trim() || 0;

  return followers;
}

function url(username) {
  return "https://m.youtube.com/" + username;
}

module.exports = { parse, url };

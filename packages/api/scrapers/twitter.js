function parse($, username) {
  const selector = `[href="/${username}/followers"]`;

  const followersDiv = $(selector);
  const followersText = followersDiv.text();

  const followers =
    followersText
      .replace('Followers', '')
      .replace(',', '')
      .trim() || 0;

  return followers;
}

function url(username) {
  return 'https://mobile.twitter.com/' + username;
}

module.exports = { parse, url };

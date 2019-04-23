function parse($) {
  const description = $('meta[property="og:description"]').attr('content');

  const followers = description.split('Followers')[0].trim();

  return followers;
}

function url(username) {
  return 'https://instagram.com/' + username;
}

module.exports = { parse, url };

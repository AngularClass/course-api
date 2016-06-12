const jwt = require('jsonwebtoken');
const uuid = require('uuid');

module.exports = {
  createJWT: function(payload) {
    return jwt.sign(payload, 'CookieMunster');
  },

  getDefaultUser: function() {
    return {
      "id": uuid.v1(),
      "bio": "Fill me out!",
      "profile_image": {
        "small": "http://orig10.deviantart.net/2207/f/2011/188/e/a/goku_facebook_by_haroongul-d3lc2sw.png",
        "medium": "http://orig10.deviantart.net/2207/f/2011/188/e/a/goku_facebook_by_haroongul-d3lc2sw.png",
        "large": "http://orig10.deviantart.net/2207/f/2011/188/e/a/goku_facebook_by_haroongul-d3lc2sw.png"
      },
      "photos": []
    }
  }
};

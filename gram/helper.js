const jwt = require('jsonwebtoken');
const uuid = require('uuid');

module.exports = {
  createJWT: function(payload) {
    return jwt.sign(payload, 'CookieMunster');
  },

  getDefaultUser: function() {
    return {
      id: uuid.v1(),
      name: "",
      username: "",
      email: "",
      bio: "fill out bio..",
      phoneNumber: "",
      gender: "female",
      first_name: "",
      last_name: "",
      portfolio_url: "http://paulgilmore.net",
      location: "CSF, CA",
      total_likes: 68,
      total_photos: 19,
      total_collections: 2,
      downloads: 3810,
      profile_image: {
        small: "https://images.unsplash.com/profile-1452199439559-1274b6758431?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=38730ad07d12ff824a82c9cf406c12de",
        medium: "https://images.unsplash.com/profile-1452199439559-1274b6758431?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64&s=1a6918cdb001510ddd5a96fb70854685",
        large: "https://images.unsplash.com/profile-1452199439559-1274b6758431?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128&s=61eb2ad46dd9c0e17ae97fa271f7dd7d"
      },
      badge: null,
      "links":{"self":"https://api.unsplash.com/users/paulgilmore_","html":"http://unsplash.com/@paulgilmore_","photos":"https://api.unsplash.com/users/paulgilmore_/photos","likes":"https://api.unsplash.com/users/paulgilmore_/likes"},
      "photos":[
        {"id":"BfLyP-vPoOI","created_at":"2016-05-31T07:47:24-04:00","width":5047,"height":2839,"color":"#DDDAD7","likes":9,"liked_by_user":false,"user":{"id":"hBOiTZnIZ64","username":"paulgilmore_","name":"Paul Gilmore","portfolio_url":"http://paulgilmore.net","profile_image":{"small":"https://images.unsplash.com/profile-1452199439559-1274b6758431?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=38730ad07d12ff824a82c9cf406c12de","medium":"https://images.unsplash.com/profile-1452199439559-1274b6758431?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64&s=1a6918cdb001510ddd5a96fb70854685","large":"https://images.unsplash.com/profile-1452199439559-1274b6758431?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128&s=61eb2ad46dd9c0e17ae97fa271f7dd7d"},"links":{"self":"https://api.unsplash.com/users/paulgilmore_","html":"http://unsplash.com/@paulgilmore_","photos":"https://api.unsplash.com/users/paulgilmore_/photos","likes":"https://api.unsplash.com/users/paulgilmore_/likes"}},"current_user_collections":[],"urls":{"raw":"https://images.unsplash.com/photo-1464695110811-dcf3903dc2f4","full":"https://images.unsplash.com/photo-1464695110811-dcf3903dc2f4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=34cc42f969e2f39d7a8af95d16c7dcca","regular":"https://images.unsplash.com/photo-1464695110811-dcf3903dc2f4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=023b681e2ba939af6169ae54102b3830","small":"https://images.unsplash.com/photo-1464695110811-dcf3903dc2f4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=fa7b2e5dba34fec7c17b1d4e74559a45","thumb":"https://images.unsplash.com/photo-1464695110811-dcf3903dc2f4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=200&fit=max&s=81675728f0f7555ec736d7759a130f33"},"categories":[{"id":4,"title":"Nature","photo_count":46343,"links":{"self":"https://api.unsplash.com/categories/4","photos":"https://api.unsplash.com/categories/4/photos"}}],"links":{"self":"https://api.unsplash.com/photos/BfLyP-vPoOI","html":"http://unsplash.com/photos/BfLyP-vPoOI","download":"http://unsplash.com/photos/BfLyP-vPoOI/download"}},
        {"id":"67MGjEwqxds","created_at":"2016-05-30T02:37:00-04:00","width":3648,"height":4560,"color":"#E5E6E5","likes":46,"liked_by_user":false,"user":{"id":"hBOiTZnIZ64","username":"paulgilmore_","name":"Paul Gilmore","portfolio_url":"http://paulgilmore.net","profile_image":{"small":"https://images.unsplash.com/profile-1452199439559-1274b6758431?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=38730ad07d12ff824a82c9cf406c12de","medium":"https://images.unsplash.com/profile-1452199439559-1274b6758431?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64&s=1a6918cdb001510ddd5a96fb70854685","large":"https://images.unsplash.com/profile-1452199439559-1274b6758431?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128&s=61eb2ad46dd9c0e17ae97fa271f7dd7d"},"links":{"self":"https://api.unsplash.com/users/paulgilmore_","html":"http://unsplash.com/@paulgilmore_","photos":"https://api.unsplash.com/users/paulgilmore_/photos","likes":"https://api.unsplash.com/users/paulgilmore_/likes"}},"current_user_collections":[],"urls":{"raw":"https://images.unsplash.com/photo-1464590072150-07e6dd0f6ca1","full":"https://images.unsplash.com/photo-1464590072150-07e6dd0f6ca1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=d1bd43d8f379ce537bcb7b112f5d7910","regular":"https://images.unsplash.com/photo-1464590072150-07e6dd0f6ca1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=9d5a040963b5739bcaf385f43fcab700","small":"https://images.unsplash.com/photo-1464590072150-07e6dd0f6ca1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=c9905413545fde53ee01e79daef56605","thumb":"https://images.unsplash.com/photo-1464590072150-07e6dd0f6ca1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=200&fit=max&s=0410a1dd6f7e8340dba6598ce3489c3a"},"categories":[{"id":4,"title":"Nature","photo_count":46343,"links":{"self":"https://api.unsplash.com/categories/4","photos":"https://api.unsplash.com/categories/4/photos"}}],"links":{"self":"https://api.unsplash.com/photos/67MGjEwqxds","html":"http://unsplash.com/photos/67MGjEwqxds","download":"http://unsplash.com/photos/67MGjEwqxds/download"}}
      ]
    }
  }
};

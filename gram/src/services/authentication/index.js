'use strict';

const authentication = require('feathers-authentication');

module.exports = function() {
  const app = this;

  let config = app.get('auth');
  config.localEndpoint = '/login';

  app.configure(authentication(config));
};

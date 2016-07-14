'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    const tokenService = app.service('auth/token');

    app.service('users').create(req.body)
    .then(tokenService.create.bind(tokenService))
    .then(res.json.bind(res))
    .catch(next);
  };
};

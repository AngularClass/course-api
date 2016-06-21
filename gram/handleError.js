module.exports = function() {
  return function(err, req, res, next) {
    console.error(err);
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Unauthorized, check JWT')
    } else {
      res.status(err.message);;
    }
  }
};

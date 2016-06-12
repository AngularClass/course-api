module.exports = function() {
  return function(err, req, res, next) {
    console.error(err);
    res.send(err.message);;
  }
};

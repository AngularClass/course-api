const nodemon = require('nodemon');
const path = require('path');

nodemon({
  script: path.resolve(__dirname, 'server.js'),
  ext: 'js'
});
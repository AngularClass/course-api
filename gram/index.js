const nodemon = require('nodemon');
const path = require('path');
const script = path.resolve(__dirname, 'server.js');
const argv = require('yargs').argv;
const port = argv.port || 3500;

nodemon(`${script} --port ${port}`);

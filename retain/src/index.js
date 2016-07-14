'use strict';

const app = require('./app');
const port = app.get('port');
const args = require('yargs').argv;
const PORT = args.port || port;
const server = app.listen(PORT);

server.on('listening', () =>
  console.log(`Retain api started on ${app.get('host')}:${PORT}`)
);

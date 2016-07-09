#!/usr/bin/env node

var args = require('yargs').argv;

if (!args.api) {
  console.log('Must provide an api');
  process.exit(1);
} else {
  require('./' + args.api + '/src');
}

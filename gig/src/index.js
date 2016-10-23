'use strict';

const express = require('express');
const app = express();

app.set('port', 3000);
app.set('host', 'localhost');

const port = app.get('port');
const args = require('yargs').argv;
const PORT = args.port || port;


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log(`Gig api started on ${ app.get('host') }:${ PORT }`)
});

const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const DB = require('./db');
const api = require('./api');
const handleError = require('./handleError');
const app = express();
const argv = require('yargs').argv;

const port = argv.port || 3500;

app.set('trust proxy', 1) // trust first proxy
app.use(cookieSession({
  name: 'session',
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(function(req, res, next) {
  const user = DB.get('users').find({id: 0}).value();
  req.session.user = user;
  next();
})
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', api());
app.use(handleError());

app.listen(port);
console.log('API on port ' + port);

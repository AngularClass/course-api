const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const DB = require('./db');
const api = require('./api');
const handleError = require('./handleError');
const app = express();

app.set('trust proxy', 1) // trust first proxy
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', api());
app.use(handleError());

app.listen(port);
console.log('Gram API on port ' + port);

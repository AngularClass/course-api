const DB = require('lowdb')();
const state = require('./state');
DB.setState(state);

module.exports = DB;

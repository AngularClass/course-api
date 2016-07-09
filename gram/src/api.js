const feathers = require('feathers');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const middleware = require('./middleware');
const services = require('./services');
const configuration = require('feathers-configuration');
const path = require('path');

const app = feathers();
app.configure(configuration(path.join(__dirname, '..')));

app.configure(hooks())
  .configure(rest())
  .configure(services)
  .configure(middleware);

module.exports = app;

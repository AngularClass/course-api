'use strict';

const service = require('feathers-sequelize');
const note = require('./note-model');
const hooks = require('./hooks');
const args = require('yargs').argv;

module.exports = function(){
  const app = this;

  const options = {
    Model: note(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/notes', service(options));

  // Get our initialize service to that we can bind hooks
  const noteService = app.service('/notes');

  // Set up our before hooks
  if (args.auth) {
    noteService.before(hooks.before);
    noteService.after(hooks.after);
  }
  // Set up our after hooks
};

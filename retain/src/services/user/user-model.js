'use strict';

// user-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');
const args = require('yargs').argv;

module.exports = function(app) {
  const user = app.get('sequelize').define('users', {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    classMethods: {
      associate() {
        const models = app.get('models');
        if (args.auth) {
          user.hasMany(models.notes);
        }
      }
    }
  });
  return user;
};

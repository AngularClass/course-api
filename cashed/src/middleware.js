const express = require('express')
const { urlencoded, json } = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

module.exports = function(app) {
  app.use(cors())
  app.use(morgan('dev'))
  app.use(urlencoded({extended: true}))
  app.use(json())
}

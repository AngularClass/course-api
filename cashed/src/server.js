const express = require('express')
const app = express()
const server = require('http')(app)
const io = require('socket.io')(server)
const middleware = require('./middleware')
const router = require('./routes')
const args = require('yargs').argv;
const PORT = args.port || port;

server.listen(PORT)

middleware(app)
app.use((req, res, next)=> {
  res.io = io
  next()
})
app.use('/api', router())


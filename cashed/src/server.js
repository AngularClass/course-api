const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const jsonServer = require('json-server')
const path = require('path')
const middleware = require('./middleware')
const feed = require('./feed')
const args = require('yargs').argv;

const jsonRouter = jsonServer.router(path.join(__dirname, 'db.json'))

middleware(app)

app.use((req, res, next)=> {
  res.io = io
  next()
})
app.use('/api', jsonRouter)

args.seed && feed.seed(jsonRouter.db)

io.on('connection', socket => {
  args.realtime && feed.realtime(socket, jsonRouter.db)
})


module.exports = server


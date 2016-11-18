const args = require('yargs').argv;
const PORT = args.port || 3500;
const server = require('./server')

server.listen(PORT, () => {
  console.log(`Cashed API http://localhost:${PORT}`)
})
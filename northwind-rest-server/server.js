#!/usr/bin/env node

const jsonServer = require('json-server')
const server = jsonServer.create()
// fs.writeFileSync('tmp/northwind.json', JSON.stringify(northwind()));


const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3001

const router = jsonServer.router('tmp/northwind.json')

server.use(middlewares)
server.use(router)

server.listen(port, () => {
  console.log('Northwind REST API is running on http://localhost:' + port)
})

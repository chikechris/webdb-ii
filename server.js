const express = require('express')
const carRoute = require('./routes/carRoute.js')

const server = express()

server.use(express.json())

server.use('/api/cars', carRoute)

server.use('/api', (req, res) => {
  res.status(200).json({ message: 'Api home route' })
})
module.exports = server

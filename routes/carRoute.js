const express = require('express')
const db = require('../data/db-config.js')

const router = express.Router()

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.get('/:id', (req, res) => {
  db('cars')
    .where({ id: req.params.id })
    .first()
    .then(car => {
      res.status(200).json(car)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = router

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

router.post('/', (req, res) => {
  db('cars')
    .insert(req.body, 'id')
    .then(([results]) => {
      res
        .status(200)
        .json({ message: `record of id ${results} has been added` })
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.delete('/:id', (req, res) => {
  db('cars')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      res.status(200).json({ message: `deleted ${count} records` })
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.put('/:id', (req, res) => {
  db('cars')
    .where({ id: req.params.id })
    .update(req.body)
    .then(results => {
      res.status(200).json({ message: `${results} records modified` })
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = router

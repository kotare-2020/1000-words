const express = require('express')
const router = express.Router()

const db = require('../db/players')

router.get('/players', (req, res) => {
    db.getPlayers()
        .then(player => {
            res.send(player)
        })
        .catch(error => {
            res.status(500).send(error.message)
        })
})

router.post('/players', (req, res) => {
    const newPlayer = req.body
    db.addPlayer(newPlayer)
        .then(user => {
            res.send(user)
        })
        .catch(error => {
            res.status(500).send(error.message)
        })
})

module.exports = router
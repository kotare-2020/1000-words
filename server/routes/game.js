const express = require('express')
const router = express.Router()

const db = require('../db/game')

router.get('/game', (req, res) => {
    db.getHost()
        .then(user => {
            res.send(user)
        })
        .catch(error => {
            res.send(500).send(error.message)   
        })
})

router.post ('/game', (req, res) => {
    const newHost = req.body
    db.addHost(newHost)
        .then(host => {
            res.send(host)
        })
        .catch(error => {
            res.send(500).send(error.messge)
        })
})

module.exports = router
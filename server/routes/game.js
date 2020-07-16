const express = require('express')
const router = express.Router()

const db = require('../db/game')

router.get('/', (req, res) => {
    db.getHost()
        .then(user => {
            res.send(user)
        })
        .catch(error => {
            res.send(500).send(error.message)   
        })
})

router.post ('/', (req, res) => {
    console.log("post routes is being run")
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
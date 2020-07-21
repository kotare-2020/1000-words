const express = require('express')
const router = express.Router()

const db = require('../db/game')

router.get ('/:id', (req, res) => {
    // console.log("get routes is being run in game")
    // console.log(req.params.id)
    db.getHost(req.params.id)
        .then(user => {
            if(user.length > 0) res.send({game: true})
            else res.send({game: false})
        })
        .catch(error => {
            res.send(500).send("it broke :(")   
            console.log(error.message)
        })
})

router.post ('/', (req, res) => {
    // console.log("post routes is being run in game")
    const newHost = req.body
    db.addHost(newHost)
        .then(host => {
            res.send({id: host[0]})
        })
        .catch(error => {
            res.send(500).send("it broke")
            console.log(error.message)
        })
})

module.exports = router
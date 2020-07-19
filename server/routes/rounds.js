const express = require('express')
const router = express.Router()

const db = require('../db/rounds')

router.get('/:id', (req, res) => {
    db.getAllRounds(req.params.id)
        .then(rounds => {
            res.send(rounds)
        })
        .catch(error => {
            res.status(500).send(error.message)
        })
})

router.get('/:gameId/:roundNum', (req, res) => {
    db.getSingleRound(req.params.gameId, req.params.roundNum)
        .then(round => {
            res.send(round)
        })
        .catch(error => {
            console.log(error.message);
            
            res.status(500).send(error.messge)
        })
})

router.patch('/:id', (req, res) => {
    const roundData = req.body
    console.log('patch is hit');
    // const roundNumber = req.params.id
    db.addRound(roundData, 
        // roundNumber
        )
        .then(() => {
            res.sendStatus(200)
        })
        .catch(error => {
            console.log(error);
            
            res.status(500).send(error)
        })
})

module.exports = router
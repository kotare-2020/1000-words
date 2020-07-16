const connection = require('./connection')

module.exports = {
    addHost,
    getHost,
}

function addHost(player, db = connection) {
    console.log("data base: adding player to game table")
    return('game').insert({
        host: player.host,
    })
}

function getHost(id, db = connection) {
    console.log("data base: geting id from game")
    return db('game').select(id)
}
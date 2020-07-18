const connection = require('./connection')

module.exports = {
    addHost,
    getHost,
}

function addHost(player, db = connection) {
    console.log("data base: adding player to game table", player)
    return db('game')
    .insert( player )
}

function getHost(id, db = connection) {
    console.log("data base: geting id from game")
    return db('game').where("game_id", id)
}
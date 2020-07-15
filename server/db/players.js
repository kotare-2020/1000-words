const connection = require('./connection')

module.exports = {
    addPlayer,
    getPlayers,
}

function addPlayer(player, db = connection) {
    return db('players').insert({
        player_name: player.player_name,
        color: player.color,
    })
}

function getPlayers(game_id, db = connection) {
    return db('players').select(game_id)
}
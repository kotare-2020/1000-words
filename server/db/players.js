const connection = require('./connection')

module.exports = {
    addPlayer,
    getPlayers,
}

function addPlayer(player, db = connection) {
    return db('players').insert({
        player_name: player.player_name,
        game_id: player.game_id,
        color: player.color,
    })
}

function getPlayers(gameId, db = connection) {
    return db('players')
        .where('game_id', gameId)
}

// function getPlayerId(gameId, playerName, db = connection){
//     return db('players')
//     .where('game_id', gameId)
// }
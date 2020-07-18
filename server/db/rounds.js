const connection = require('./connection')

module.exports = {
    getAllRounds,
    // getSingleRound,
    addRound,
    getSinglePlayer,
}

function getAllRounds(id, db = connection) {
    return db('rounds')
        .join("players", "rounds.player", "players.player_id")
        .where('game_id', id)
}

// function getSingleRound(gameId, roundNum ,db = connection) {
//     return db('rounds')
//         .join("players", "rounds.player", "players.player_id")
//         .where('game_id', gameId)
//         .select('round' + roundNum, 'player_id')
// }

function getSinglePlayer(gameId, playerId ,db = connection) {
    return db('rounds')
        .join("players", "rounds.player", "players.player_id")
        .where('game_id', gameId)
        .where('player', playerId)
}

// expecting roundData = {roundNumber, roundInfo, player_id} from api

function addRound(roundData ,db = connection) {
    let obj = {}
    obj['round' + roundData.roundNumber] = roundData.roundInfo
    return db('rounds')
    .where('player', roundData.player_id,)
    .update(obj)
}
const connection = require('./connection')

module.exports = {
    getAllRounds,
    getSingleRound,
    addRound,
    createRound,
}

function getAllRounds(id, db = connection) {
    console.log("get all rounds recived ", id)
    return db('rounds')
        .join("players", "rounds.player", "players.player_id")
        .where('game_id', id)
}

function getSingleRound(gameId, roundNum ,db = connection) {
    return db('rounds')
        .join("players", "rounds.player", "players.player_id")
        .where('game_id', gameId)
        .select('round' + roundNum, 'player_id')
}

// expecting roundData = {roundNumber, roundInfo, player_id} from api

function addRound(roundData ,db = connection) {
    let obj = {}
    console.log("1st", obj);
    obj['round' + roundData.roundNumber] = roundData.roundInfo
        if((roundData.roundNumber)%2 != 1) {
            obj['round' + roundData.roundNumber] = roundData.roundInfo
            // obj['round' + roundData.roundNumber] = JSON.stringify(roundData.roundInfo) // this is the working code
            console.log(obj);
        }
    return db('rounds')
    .where('player', roundData.playerId,)
    .update(obj)
}
function createRound(GameId, playerId, db = connection) {
    return db("rounds")
    .insert({player: playerId})
}
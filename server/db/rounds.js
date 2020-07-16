const connection = require('./connection')

module.exports = {
    getAllRounds,
    getSingleRound,
    addRound,
}

function getAllRounds(db = connection) {
    return db('rounds').select()
}

function getSingleRound(round ,db = connection) {
    return db('rounds').select(round)
}

function addRound(round ,db = connection) {
    return db('rounds').insert({
        write_1: round.write_1,
        draw_1: round.draw_1,
        write_1: round.write_2,
        draw_1: round.draw_2,
        write_1: round.write_3,
        draw_1: round.draw_3,
        write_1: round.write_4,
        draw_1: round.draw_4,
        write_1: round.write_5,
        draw_1: round.draw_5,
    })
}
const connection = require('./connection')

module.exports = {
    addHost,
    getHost,
}

function addHost(player, db = connection) {
    return('game').insert({
        host: player.host,
    })
}

function getHost(id, db = connection) {
    return db('game').select(id)
}
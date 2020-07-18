import request from 'superagent'

const game = '/api/game'
const players = '/api/players'
const round = '/api/rounds'

export function addHostApi(host) {
    console.log('from addHostApi')
    return request
        .post(game)
        .send(host)
        .then(res => {
            return res.body
        })
}

export function addPlayerApi(player) {
    console.log('from addPlayerApi')
    return request
        .post(players)
        .send(player)
        .then(res => {
            return res.body
        })
}

export function getGameIdApi(id) {
    console.log(`${game}/${id}`)
    return request  
        .get(`${game}/${id}`)
        // .then(res => res.body)
}

export function getPlayersInlobby(id) {
    console.log(`${players}/${id}`)
    return request
        .get(`${players}/${id}`)
}
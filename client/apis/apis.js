import request from 'superagent'

const game = 'http://localhost:3000/api/game'
const players = 'http://localhost:3000/api/players'
const round = 'http://localhost:3000/api/rounds'

export function addHostApi(host) {
    console.log('from addHostApi')
    return request
        .post(game)
        .send(host)
        .then(res => {
            return req.body
        })
}

export function addPlayerApi(player) {
    console.log('from addPlayerApi')
    return request
        .post(players)
        .send(player)
        .then(res => {
            return req.body
        })
}

export function getGameIdApi() {
    return request  
        .get(game)
        then(res => res.body)
}
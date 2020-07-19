import request from 'superagent'

const game = '/api/game'
const players = '/api/players'
const round = '/api/rounds'

export function addHostApi(host) {
    console.log('from addHostApi')
    console.log(host)
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
            console.log(res.body)
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

export function addRoundDataApi(data) {
    return request 
        .patch(`${round}/${data.gameId}`)
        .send(data.dbdata)
        .then(res => {
            return res.body
        })
}
export function createRound(data) {
    console.log(data);
    console.log("this is from the api");
    return request 
        .post(`${round}/${data.game}`)
        .send(data)
        .then(res => {
            return res.body
        })
}
export function getAllRounds(data) {
    console.log("get all rounds api");
    return request 
        .get(`${round}/${data}`)
        .then(res => {
            return res.body
        })
}
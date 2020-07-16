import request from 'superagent'

const game = 'http://localhost:3000/api/game'

export function addHostApi(host) {
    return request
        .post(game)
        .send(host)
        .then(res => request.body)
}
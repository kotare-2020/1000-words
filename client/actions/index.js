export const ADD_HOST = "ADD_HOST"
export const ADD_PLAYER = "ADD_PLAYER"

import { addHostApi, getGameIdApi} from '../apis/apis'
import { addPlayerApi } from '../apis/apis'

export function addHost(host) {
    return {
        type: ADD_HOST,
        host: host
    }
}

export function saveHost(host) {
    return dispatch => {
        addHostApi(host).then(() => {
            // console.log("game created");
            
        })
    }
}

export function addPlayer(player) {
    return {
        type: ADD_PLAYER,
        player: player
    }
}

export function savePlayer(player) {
    return dispatch => {
        addPlayerApi(host).then(() => {
            // console.log("user created");
            
        })
    }
}

export function getGameId() {
    return dispatch => {
        getGameIdApi().then()
    }
}


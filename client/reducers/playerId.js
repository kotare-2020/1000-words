import { SET_PLAYER_ID } from "../actions/playerId"

const initialState = 0

const playerIdReducer = (action, state = initialState) => {
    switch(action.type) {
        case SET_PLAYER_ID:
            return action.playerId
        default:
            return state

    }
}

export default playerIdReducer
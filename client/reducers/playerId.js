import { SET_PLAYER_ID } from "../actions/playerId"

const initialState = 0

const playerIdReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PLAYER_ID:
            return action.playerId
        default:
            return state

    }
}

export default playerIdReducer
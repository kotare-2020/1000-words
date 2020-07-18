import { SET_GAME_ID } from '../actions/gameId'

const initialState = 0

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GAME_ID:
            return action.gameId
        default:
            return state
    }
}

export default reducer
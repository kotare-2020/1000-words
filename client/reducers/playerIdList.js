import { SET_PLAYER_ID_LIST } from "../actions/playerIdList"

const initialState = 0

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PLAYER_ID_LIST:
            return action.playerIdList
        default:
            return state

    }
}

export default Reducer
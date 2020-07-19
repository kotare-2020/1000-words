import { SET_PLAYERS } from "../actions/players"

const initialState = []

const reducer = (state = initialState, action) => {
    console.log("reducer: ", action)
    switch(action.type) {
        case SET_PLAYERS:
            return action.players
        default: 
        return state
    }
}

export default reducer
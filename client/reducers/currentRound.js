import {INCREMENT_CURRENT_ROUND} from "../actions/currentRound"
import {RESET_ROUND} from "../actions/currentRound"
const initialState = 1

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case INCREMENT_CURRENT_ROUND:
            return state + 1
        case RESET_ROUND:
            return state = 1
        default:
            return state
    }
}

export default reducer
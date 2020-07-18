import {INCREMENT_CURRENT_ROUND} from "../actions/currentRound"

const initialState = 0

const reducer = (action, state = initialState) => {

    switch(action.type) {
        case INCREMENT_CURRENT_ROUND:
            return state + 1
        default:
            return state
    }
}

export default reducer
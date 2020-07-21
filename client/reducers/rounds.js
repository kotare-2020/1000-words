import {INCREMENT_CURRENT_ROUND} from '../actions/currentRound' 

const initialState = 0

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_CURRENT_ROUND:
            return state++
        default:
            return state
    }
}

export default reducer
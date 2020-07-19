import { TOTAL_ROUND_COUNT } from '../actions/totalRound'

const initialState = 0

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case TOTAL_ROUND_COUNT:
            return state
        default:
            return state
    }
}

export default reducer
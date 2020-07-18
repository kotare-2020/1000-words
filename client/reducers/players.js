import { ADD_PLAYER } from "../actions"

const initialState = []

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLAYER:
            return [...state,action.player]
        default: 
        return state
    }
}

export default reducer
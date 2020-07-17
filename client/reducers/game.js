initialState = []

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_HOST':
            return [...state, action.host]
        default:
            return state
    }
}

export default reducer
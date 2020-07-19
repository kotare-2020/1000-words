const inintialState = []

const reducer = (state = inintialState,action) => {
    switch(action.type) {
        case 'ADD_TO_DATABASE':
            return state.map(data => {
                if(data.id == action.data.id && data.playerId == action.data.playerId) {
                    return action.data
                } else return data
            })
            default:
                return state
    }
}

export default reducer
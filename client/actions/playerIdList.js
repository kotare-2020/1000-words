export const SET_PLAYER_ID_LIST = "SET_PLAYER_ID_LIST"

export const setPlayerIdList = (playerIdList) => {
    return {
        type: SET_PLAYER_ID_LIST,
        playerIdList
    }
}
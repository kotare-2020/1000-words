export const SET_GAME_ID = "SET_GAME_ID"

export const setGameId = (gameId) => {
    return {
        type: SET_GAME_ID,
        gameId: gameId
    }
}
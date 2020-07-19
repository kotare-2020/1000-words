export const SET_PLAYERS = "SET_PLAYERS"

export const setPlayers = (players) => {
    console.log("action: ", players)
    return {
        type: SET_PLAYERS,
        players
    }
}
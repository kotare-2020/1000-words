export const INCREMENT_CURRENT_ROUND = "INCREMENT_CURRENT_ROUND"
export const RESET_ROUND = "RESET_ROUND"
export const incrementCurrentRound = () => {
    return {
        type: INCREMENT_CURRENT_ROUND
    }
}
export const resetRound = () => {
    return {
        type: RESET_ROUND
    }
}
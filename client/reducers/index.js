import { combineReducers } from 'redux'
import game from './gameId'
import players from './players'
import rounds from './rounds'
import currentRound from "./currentRound"
import playerId from "./playerId"



export default combineReducers({
  game,
  players,
  rounds,
  currentRound,
  playerId
})
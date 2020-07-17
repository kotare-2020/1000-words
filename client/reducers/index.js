import { combineReducers } from 'redux'
import game from './game'
import players from './players'
import rounds from './rounds'


export default combineReducers({
  game,
  players,
  rounds,
})
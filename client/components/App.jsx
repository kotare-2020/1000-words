import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"
import Canvas from './canvas'
import ViewSpace from './ViewSpace'

// import IoSocketTest from "./IoSocketTest"
import Drawing from './Drawing'
import CreateGame from './CreateGame'


import PlayerLobby from "./PlayerLobby"


const App = () => {

  return (
  <>
    {/* <CreateGame /> */}
    <h1>Time to Draw!</h1>
    {/* <IoSocketTest/> */}
    <PlayerLobby/>
    
    </>
  )
}

export default App

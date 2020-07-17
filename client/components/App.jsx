import React from 'react'

import Canvas from './canvas'
import ViewSpace from './ViewSpace'

// import IoSocketTest from "./IoSocketTest"
import Drawing from './Drawing'

import PlayerLobby from "./PlayerLobby"


const App = () => {

  return (<>
    <h1>Time to Draw!</h1>
    {/* <IoSocketTest/> */}
    <PlayerLobby/>
    
    </>
  )
}

export default App

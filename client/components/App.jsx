import React from 'react'

import Canvas from './canvas'
import ViewSpace from './ViewSpace'

import SocketTest from "./SocketTest"
import Drawing from './Drawing'
import CreateGame from './CreateGame'


const App = () => {

  return (
  <>
    {/* <CreateGame /> */}
    <h1>Time to Draw!</h1>
    <Drawing/>
    {/* <SocketTest/> */}
    </>
  )
}

export default App

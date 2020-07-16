import React from 'react'

import Canvas from './canvas'
import ViewSpace from './view'

import SocketTest from "./SocketTest"


const App = () => {

  return (<>
    <h1>Time to Draw!</h1>
    <div id="container"></div>
    <Canvas/>
    <ViewSpace/>
    <SocketTest/>
    </>
  )
}

export default App

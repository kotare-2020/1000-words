import React from 'react'
import Canvas from './canvas'
import ViewSpace from './view'

const App = () => {
  return (<>
    <h1>Time to Draw!</h1>
    <div id="container"></div>
    <Canvas/>
    <ViewSpace/>

    </>
  )
}

export default App

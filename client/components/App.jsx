import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"
import Canvas from './canvas'
import ViewSpace from './ViewSpace'

import SocketTest from "./SocketTest"
import Drawing from './Drawing'



const App = () => {

  return (<>
    <h1>Time to Draw!</h1>
    <Drawing/>
    {/* <SocketTest/> */}
    </>
  )
}

export default App

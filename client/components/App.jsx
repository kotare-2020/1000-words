import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"

import HostJoin from "./HostJoin"
import CreateGame from "./CreateGame"
import JoinGame from "./JoinGame"
import HostLobby from "./HostLobby"
import PlayerLobby from "./PlayerLobby"
import Writing from './Writing'
import ViewSpace from './ViewSpace'
import Drawing from './Drawing'
import Canvas from './canvas'
import drawcanvas from "./canvas"
import SocketTest from "./SocketTest"


const App = () => {


  return (
    
    <>

    //     <h1>Time to Draw!</h1>
    //  <Writing JSON="this"/>
    //  <Drawing/>

      {/* <Router>
        dev menu <Link to="/">home</Link> | <Link to="/lobby">lobby</Link> | <Link to="/canvas">canvas</Link>
        <Route exact path="/" component={HostJoin} />
        <Route exact path="/create" component={CreateGame} />
        <Route exact path="/join" component={JoinGame} />
        <Route exact path="/lobby" component={PlayerLobby} />
        <Route exact path="/canvas" component={drawcanvas} />
        <Route exact path="/createlobby" component={HostLobby} />
        {/* <Route exact path="/apis" component={APIs} /> 

      </Router> */}
    </>
  )
}

export default App

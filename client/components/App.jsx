import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"

import HostJoin from "./HostJoin"
import CreateGame from "./CreateGame"
import JoinGame from "./JoinGame"
import PlayerLobby from "./PlayerLobby"
import drawcanvas from "./canvas"
import HostLobby from "./HostLobby"
import Game from "./Game"

const App = () => {

  return (
  <>
  
    <Router>
    dev menu <Link to="/">home</Link> | <Link to="/lobby">lobby</Link> | <Link to="/canvas">canvas</Link>
          <Route exact path="/" component={HostJoin}/>
          <Route exact path="/create" component={CreateGame} />
          <Route exact path="/join" component={JoinGame} />
          <Route exact path="/lobby" component={PlayerLobby} />
          <Route exact path="/canvas" component={drawcanvas} />
          <Route exact path="/createLobby" component={HostLobby} />
          <Route exact path="/game" component={Game} />
          {/* <Route exact path="/apis" component={APIs} /> */}
  
    </Router>
    </>
  )
}

export default App

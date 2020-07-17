import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"

import HostJoin from "./HostJoin"
import CreateGame from "./CreateGame"
import JoinGame from "./JoinGame"
import Lobby from "./PlayerLobby"
import drawcanvas from "./canvas"
const App = () => {

  return (
  <>
  
    <Router>
    dev menu <Link to="/">home</Link> | <Link to="/lobby">lobby</Link> | <Link to="/drawcanvas">canvas</Link>
          <Route exact path="/" component={HostJoin}/>
          <Route exact path="/create" component={CreateGame} />
          <Route exact path="/join" component={JoinGame} />
          <Route exact path="/lobby" component={Lobby} />
          {/* <Route exact path="/apis" component={APIs} /> */}
  
    </Router>
    </>
  )
}

export default App

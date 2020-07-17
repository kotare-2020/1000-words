import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"

<<<<<<< HEAD
import Writing from './Writing'
import ViewSpace from './ViewSpace'
import Drawing from './Drawing'


import SocketTest from "./SocketTest"

||||||| 5927bcc
import Canvas from './canvas'
import ViewSpace from './ViewSpace'

import SocketTest from "./SocketTest"
import Drawing from './Drawing'

=======
import HostJoin from "./HostJoin"
import CreateGame from "./CreateGame"
import JoinGame from "./JoinGame"
import PlayerLobby from "./PlayerLobby"
import drawcanvas from "./canvas"
import HostLobby from "./HostLobby"
>>>>>>> 95f7a527daea599988fd37cde019887dad4ae6a9

const App = () => {

<<<<<<< HEAD
  return (<>
    <h1>Time to Draw!</h1>
 <Writing JSON="this"/>
 {/* <Drawing/> */}
||||||| 5927bcc
  return (<>
    <h1>Time to Draw!</h1>
    <Drawing/>
    {/* <SocketTest/> */}
=======
  return (
  <>
  
    <Router>
    dev menu <Link to="/">home</Link> | <Link to="/lobby">lobby</Link> | <Link to="/canvas">canvas</Link>
          <Route exact path="/" component={HostJoin}/>
          <Route exact path="/create" component={CreateGame} />
          <Route exact path="/join" component={JoinGame} />
          <Route exact path="/lobby" component={PlayerLobby} />
          <Route exact path="/canvas" component={drawcanvas} />
          <Route exact path="/createlobby" component={HostLobby} />
          {/* <Route exact path="/apis" component={APIs} /> */}
  
    </Router>
>>>>>>> 95f7a527daea599988fd37cde019887dad4ae6a9
    </>
  )
}

export default App

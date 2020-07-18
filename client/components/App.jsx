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
import Game from "./Game"

class App extends React.Component {

  colors = ["#ff8f8f", "#ffbe86", "#ff9437", "#ffcc98", "#d7ff98", "#85ff9f", "#85fff4", "#91a9ff", "#c591ff", "#ffb5f3", "#ff6e6e"]

  componentDidMount() {
    document.body.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)]
    socket.on('connect', () => {
      console.log("connected to websocket server")
      socket.on("disconnect", () => {
        console.log("connection to websocket server was lost")
      })

    });
  }


  render() {


    return (

      <>
        <div id="wrapper">
          <Router>
            dev menu <Link to="/">home</Link> | <Link to="/lobby">lobby</Link> | <Link to="/canvas">canvas</Link>


            {/* <h1>Time to Draw!</h1>
          <Writing JSON="this" />
          <Drawing /> */}

            <Route exact path="/" component={HostJoin} />
            <Route exact path="/create" component={CreateGame} />
            <Route exact path="/join" component={JoinGame} />
            <Route exact path="/lobby" component={PlayerLobby} />
            <Route exact path="/canvas" component={drawcanvas} />
            <Route exact path="/createLobby" component={HostLobby} />
            <Route exact path="/game" component={Game} />
            {/* <Route exact path="/apis" component={APIs} /> */}

          </Router>
        </div>
      </>
    )
  }
}

export default App

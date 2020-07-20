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
import Gallery from "./Gallery"


class App extends React.Component {

  colors = ["#EECB5C", "#4469B1"]

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



        <Router>
          <div className="dev-menu">
            dev menu | <Link to="/">home</Link> | <Link to="/game">game</Link> | <Link to="/canvas">canvas</Link> | <Link to="/Writing">Writing</Link> | <Link to="/Drawing">Drawing</Link>
          </div>
          <div className="game-screen">
            <div className="game-content">
              <Route exact path="/" component={HostJoin} />
              <Route exact path="/create" component={CreateGame} />
              <Route exact path="/join" component={JoinGame} />
              <Route exact path="/lobby" component={PlayerLobby} />
              <Route exact path="/canvas" component={drawcanvas} />
              <Route exact path="/hostLobby" component={HostLobby} />
              <Route exact path="/game" component={Game} />
              <Route exact path="/Writing" component={Writing} />
              <Route exact path="/Drawing" component={Drawing} />

              {/* <Route exact path="/apis" component={APIs} /> */}
            </div>
          </div>
        </Router>
      </>
    )
  }
}

export default App

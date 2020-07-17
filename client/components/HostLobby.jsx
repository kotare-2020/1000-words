import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";


class HostLobby extends React.Component {
    
    render() {
        return(
            <>
            <h1>Host Lobby</h1>
            <p>player 1</p>
            <p>player 2</p>
            <p>player 3</p>
            <p>player 4</p>
            <button onClick={()=>{}}><Link to="/game">Start Game</Link></button>
            </>
        )
    }
}

export default HostLobby
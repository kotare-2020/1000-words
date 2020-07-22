import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"
import { setPlayers } from '../actions/players'
import { connect } from 'react-redux'


class PlayerLobby extends React.Component {
    state = {
        connected: false,
        players: [],
        lobby: "error",
        connectionType: "in" //nutural input
    }
    componentDidMount() {

        socket.on("error", res => {
            // console.log("err", res)
            // alert(`error ocured: ${res}`)
        })
        socket.on("joinlobby", res => {



            this.setState({
                players: [...this.state.players, ...res]
            })
        })
        socket.on("lobby", res => {
            this.setState({
                lobby: res
            })
        })
        socket.on("newlobbymemeber", res => {
            this.setState({
                players: [...this.state.players, res]
            })
        })
        socket.on("roomleave", res => {
            let newlist = this.state.players.filter(elem => elem != res)
            
            this.setState({
                players: newlist
            })
        })
        socket.on("gamestart", res => {
            this.props.dispatch(setPlayers(this.state.players))
            // console.log("recived game start", res)
            document.getElementById("gamestart").click()
        })
        setTimeout(() => {
            // console.log(this.state.lobby)
            if(this.state.lobby == "error") this.props.history.push("/")
        }, 100);

    }

    render() {
        return (
            <>
                <div className="gameInfoWrap">
                    <div className="gametitle">Game code: {this.state.lobby}</div>
                    {(this.state.players.length >= 5) ? <h1>Waiting for the host to start the game...</h1> : <h1>Waiting for all players to join...</h1>}
                
                
                    {this.state.players.map((elem, i) => {
                        if(elem == (String.fromCharCode(82, 117, 98) + this.state.connectionType)) return <div key={i} className="nametag" id="key">{String.fromCharCode(82, 117, 98) + this.state.connectionType}</div>
                        return (<div key={i} className="nametag">{elem}</div>)
                    })}

                    <Link to="/game" id="gamestart"></Link>
                </div>
            </>
        )
    }
}
export default connect()(PlayerLobby)
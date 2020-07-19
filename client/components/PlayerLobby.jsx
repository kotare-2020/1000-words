import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"
import { setPlayers } from '../actions/players'
import { connect } from 'react-redux'


class PlayerLobby extends React.Component {
    state = {
        connected: false,
        players: [],
        lobby: "error",

    }
    componentDidMount() {

        socket.on("error", res => {
            console.log("err", res)
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
            console.log("recived game start", res)
            document.getElementById("gamestart").click()
        })
        setTimeout(() => {
            console.log(this.state.lobby)
            if(this.state.lobby == "error") this.props.history.push("/")
        }, 100);

    }

    render() {
        return (
            <>
                <br></br>
                <div className="gameInfoWrap">
                    <div className="gametitle">Game code: {this.state.lobby}</div>
                    {(this.state.players.length >= 5) ? <h1>Waiting for host to start</h1> : <h1>Currently waiting for players...</h1>}
                </div>
                <br></br>
                {this.state.players.map((elem, i) => {
                    return (<div key={i} className="nametag">{elem}</div>)
                })}

                <br></br>

                <Link to="/game" id="gamestart"></Link>
            </>
        )
    }
}
export default connect()(PlayerLobby)
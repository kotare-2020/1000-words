import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { setPlayers } from '../actions/players'

class HostLobby extends React.Component {
    state = {
        connected: false,
        players: [
            // "ben", "rubin", "nick", "marta", "andy"
        ],
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
           document.title = "Host Lobby " + res
         
       
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
        setTimeout(() => {
            console.log(this.state.lobby)
            if(this.state.lobby == "error") this.props.history.push("/")
        }, 100);
        //    socket.on("gamestart", res => {
        //     document.getElementById("gamestart").click()
        //    })

    }
    startgame = () => {
        socket.emit("gamestart", this.state.lobby)
        document.getElementById("gamestart").click()
        this.props.dispatch(setPlayers(this.state.players))

    }


    render() {
        return (
            <>
            <div className="gameInfoWrap">
            <div className="gametitle">Game code: {this.state.lobby}</div>
            {(this.state.players.length >= 5) ? <button className="HostLobby-StartButton" onClick={this.startgame}>start</button> : <h2>Currently waiting for players...</h2>}
            </div>
            <br></br>
            {this.state.players.map((elem, i) => {
                return (<div key={i} className="nametag">{elem}</div>)
            })}

                <Link to="/game" id="gamestart"></Link>
            </>
        )
    }
}
export default connect()(HostLobby)
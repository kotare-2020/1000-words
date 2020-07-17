import React from 'react'
import {getGameIdApi, getPlayersInlobby} from "../apis/apis"
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"

class JoinGame extends React.Component {

    state = {
        realgame: false,
    }
componentDidMount(){
    getPlayersInlobby(document.getElementById("gameid").value)
}

    validategame = () => {
        console.log(document.getElementById("gameid").value)
        if(document.getElementById("gameid").value !== "") {
        getGameIdApi(document.getElementById("gameid").value)
        .then(res=>{
            console.log(res.body)
            if(res.body.game){
                console.log("game exists")
                this.setState({realgame: true})
            }
            else alert("that game dose not exist")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    }
    render() {
        return(
           <>
                <div>
                <label>game id</label>
                <input id="gameid" type="text" name="lobby" placeholder="Game id" />
                </div>
                <div>
                <label>User Name</label>
                <input id="name" type="text" name="player" placeholder="Name"/>
                </div>         
                <button onClick={this.validategame}>Join</button>
                <Link to="/lobby">to lobby</Link>
                 
        </>
        )
    }
}

export default JoinGame
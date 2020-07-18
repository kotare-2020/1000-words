import React from "react";
import { getGameIdApi, getPlayersInlobby, addPlayerApi } from "../apis/apis";
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { setPlayerId } from "../actions/playerId";

class JoinGame extends React.Component {
    state = {
        error: "no error",
        gameId: "",
        name: "",
    };

    updateGameId = (e) => {
        this.setState({
            gameId: e.target.value
        })
    }

    updateName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    getGameId = () => {
        const { gameId } = this.state

        return getGameIdApi(gameId)
            .then((res) => {   
                if (res.body.game) {
                    return this.getPlayersInLobby()
                } else {
                    throw new Error("Lobby does not exist")
                }
            })
            .catch(() => {
                console.log(err);
            })
    }

    getPlayersInLobby = () => {
        const { gameId } = this.state

        return getPlayersInlobby(gameId)
            .then((data) => {
                if (data.body.length < 10) {
                    return this.addPlayer()
                } else {
                    throw new Error("Lobby is full")
                }
            })
            .catch(() => {
                console.log(err);
            })
    }

    addPlayer = () => {
        const { gameId, name} = this.state

        return addPlayerApi(
            {
                player_name: name,
                game_id: gameId,
                color: "black",
            }
        )
        .then(res => {
            const playerId = res.body.playerId // TODO this should be in the response (player id that was just generated)

            this.props.dispatch(setPlayerId(playerId))
        })
        .catch(err => {
            throw new Error("DB error")
        })
    }

    validategame = () => {
        const { gameId, name} = this.state

        getGameIdApi(gameId)
            .then(() => {
                socket.emit('send-nickname', name)
                socket.emit("join", gameId)

                this.props.history.push("/lobby")
            })
            .catch(err => {
                this.setState({  error: err.message  })
                console.log(err)
            })
    };

    render() {
        return (
            <React.Fragment>
                {(this.state.error == "no error") ? "" : <div className="errorResponse"><h3>{this.state.error}</h3></div>} 
                <div className="inputWraper">
                    <label className="inputtitle"><b>game id</b></label><br></br>
                    <input id="gameid" type="text" name="lobby" placeholder="Game id" onChange={this.updateGameId}/>
                </div>
                <div className="inputWraperb">
                    <label className="inputtitle"><b>User Name</b></label><br></br>
                    <input id="name" type="text" name="player" placeholder="Name"  onChange={this.updateName}/>
                </div>
                <div onClick={this.validategame} className="join-button button ">Join</div>
               
            </React.Fragment>
        );
    }
}

export default JoinGame;

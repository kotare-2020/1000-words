import React from "react";
import BackButton from './BackButton'
import { getGameIdApi, getPlayersInlobby, addPlayerApi, createRound} from "../apis/apis";
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { setGameId } from '../actions/gameId'
import { setPlayerId } from '../actions/playerId'


class JoinGame extends React.Component {
    state = {
        error: "no error",
    };

    validategame = () => {


        getGameIdApi(document.getElementById("gameid").value)
            .then((res) => {
                if(document.getElementById("name").value.length > 1){ console.log("acceptable")
                
                if (res.body.game) {
                    getPlayersInlobby(document.getElementById("gameid").value)
                        .then((data) => {


                            if (data.body.length < 10) {
                                addPlayerApi(
                                    {
                                        player_name: document.getElementById("name").value,
                                        game_id: document.getElementById("gameid").value,
                                        color: "black",
                                    }


                                )
                                    .then(playerId => {
                                      
                                        createRound(
                                            {
                                                    game: document.getElementById("gameid").value,
                                                    player: playerId[0]
                                                 
                                                  
                                            }
                                        )
                                        this.props.dispatch(setPlayerId(playerId))
                                        this.props.dispatch(setGameId(document.getElementById("gameid").value))
                                        socket.emit('send-nickname', document.getElementById("name").value)
                                        socket.emit("join", document.getElementById("gameid").value)
                                        document.getElementById("next").click()
                                    })
                                    .catch(err => {
                                        this.setState({ error: "DB error" })
                                        console.log("join game component has an error ", err)
                                    })
                            }
                            else this.setState({ error: "Lobby is full" })

                        })

                }
                else this.setState({ error: "Lobby does not exist" })
            }
            else this.setState({ error: "user name does not contain enough characters" })
            })
            
            .catch((err) => {
                console.log("join game component has an error ", err);
            })

    };

    handleSubmit = () => {
        event.preventDefault()
        this.validategame()
    }

    render() {
        return (
            <>
                {(this.state.error == "no error") ? "" : <div className="errorResponse"><h3>{this.state.error}</h3></div>}
                <div className="inputWraper">
                </div>
            <form onSubmit={this.handleSubmit}>
                    <label className="inputtitle">game id</label><br></br>
                    <input required id="gameid" type="text" name="lobby" placeholder="Game id"/>
                <div className="inputWraperb">
                    <label className="inputtitle">User Name</label><br></br>
                    <input required id="name" type="text" name="player" placeholder="Name"/>
                </div>
                <div className="center">
                <button onClick={this.handleSubmit} className="join-button button ">Join</button>
                </div>
            </form>
                <Link to="/lobby" ><div id="next" style={{ display: "none" }}>to lobby</div></Link>
                <BackButton/>
            </>
        );
    }
}

export default connect()(JoinGame)




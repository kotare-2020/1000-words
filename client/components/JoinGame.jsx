import React from "react";
import { getGameIdApi, getPlayersInlobby, addPlayerApi } from "../apis/apis";
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";

class JoinGame extends React.Component {
    state = {


    };

    validategame = () => {


        getGameIdApi(document.getElementById("gameid").value)
            .then((res) => {


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
                                .then(() => {
                                    socket.emit('send-nickname', document.getElementById("name").value)
                                    socket.emit("join", document.getElementById("gameid").value)
                                document.getElementById("next").click()
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                            }
                            else alert("Lobby is full")

                        })

                }
                else alert("that game dose not exist");
            })
            .catch((err) => {
                console.log(err);
            })

    };
    render() {
        return (
            <>
         
                <div className="inputWraper">
                    <label className="inputtitle"><b>game id</b></label><br></br>
                    <input id="gameid" type="text" name="lobby" placeholder="Game id" />
                </div>
                <div className="inputWraperb">
                    <label className="inputtitle"><b>User Name</b></label><br></br>
                    <input id="name" type="text" name="player" placeholder="Name" />
                </div>
                <div onClick={this.validategame} className="join-button button ">Join</div>
                <Link to="/lobby" ><div id="next" style={{display: "none"}}>to lobby</div></Link>
               
            </>
        );
    }
}

export default JoinGame;

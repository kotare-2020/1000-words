import React from 'react'
import HostLobby from './HostLobby'
import { addHostApi, addPlayerApi, createRound} from '../apis/apis'
import { connect } from 'react-redux'
import { setGameId } from '../actions/gameId'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { setPlayerId }  from '../actions/playerId'

class CreateGame extends React.Component {

  state = {
    userName: '',
    hostLobby: false,
    redirect: false,
  }

  handleChange = () => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  createHost = () => {

    addHostApi({
      host: document.getElementById('hostName').value
    }).then((res) => {
      addPlayerApi(
        {
          player_name: document.getElementById("hostName").value,
          game_id: res.id,
          color: "black",
        })
        .then(playerId => {
          createRound(
            {
                    game: document.getElementById("hostName").value,
                    player: playerId
            }
        )
          socket.emit('send-nickname', document.getElementById("hostName").value)
          socket.emit("join", res.id)

          this.props.dispatch(setGameId(res.id))
          this.props.dispatch(setPlayerId(playerId))
          document.getElementById("gotolobby").click()
        })
        .catch(err => {
          console.log(err)
        })
    })
      .catch(error => {
        console.log(error);
      })
  }

  handleSubmit = () => {
    event.preventDefault()
    this.createHost()
  }

  render() {
    return (
      <>
        <div className="CreateGame-Container">
        <form onSubmit={this.handleSubmit}>
          <label>Enter Your Username!</label>
          <input className="CreateGame-Input" id="hostName" required onChange={this.handleChange} name="userName" type="text"></input>
          {/* <input type="submit" value="Create New Game!"></input> */}
          <button className="green" onClick={this.handleSubmit}>Create</button>
        </form>
          <p>to start a game you must have 5-10 players</p>
          <Link to="/hostLobby" id="gotolobby"></Link>

        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    gameId: state.gameId,
    playerId: state.playerId
  }
}

// export default CreateGame
export default connect(mapStateToProps)(CreateGame)


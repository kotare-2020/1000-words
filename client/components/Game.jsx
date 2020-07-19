import React from 'react'

import { connect } from 'react-redux'
import { incrementCurrentRound} from '../actions/currentRound'
import Writing from './Writing'
import Drawing from './Drawing'
import { getPlayersInlobby } from '../apis/apis'
import { setPlayerIdList } from '../actions/playerIdList'


class Game extends React.Component {

    state = {
        gameid: this.props.gameId,       //fix this later
        round: 1,
        done: false,
        finnished: [],
        playerPosition:"",
    }
    userfinnished = () => {
        console.log("this user clicked done")
        this.setState({ done: true })
        socket.emit("imdone", this.state.gameid)
    }
  
    componentDidMount(){

        getPlayersInlobby(this.props.gameId)
        .then(playersInfo => playersInfo.body.map(playerInfo => playerInfo.player_id))
        .then(playerIdList => this.props.dispatch(setPlayerIdList(playerIdList)))
        .then(() => this.setState({
            playerPosition: (this.props.playerIdList.indexOf(this.props.playerId))
        }))

        if(this.state.gameid == 0) this.props.history.push("/")
        socket.on("playerfinnished", res => {
            console.log(`user ${res} finnished`)
            this.setState({
                finnished: [...this.state.finnished, res]
            })
            console.log(this.props.players.length == this.state.finnished.length)
            console.log(this.props.players.length, this.state.finnished.length)
            if(this.props.players.length == this.state.finnished.length && this.props.players.length >= 5 ) {
                console.log("all users done")
                
                this.props.dispatch(incrementCurrentRound())
                this.setState({
                    round: this.state.round + 1,
                    done: false,
                    finnished: [],
                })
                
            }
        })
    }

    
    render() {

        return (
            <>
              
                <div className="Game-h2 center"><h2>{`Your game: ${this.state.gameid}`}</h2></div>
                <center>
                    <div className="gamewrap">
                        {/* <p onClick={this.userfinnished}>simulate done</p> */}
                        <span><h1>{`Round ${this.state.round} ${((this.state.round % 2) == 1) ? "write" : "draw"}`}</h1></span>

                        <GameScreen isDone={this.state.done} currentRound={this.state.round} nowDone={this.userfinnished}/>

                    </div>
                </center>
            </>
        )
    }
}

class GameScreen extends React.Component {
   
    render() {
        //console.log(this.userfinnished)
      
        if (this.props.isDone) {
            return <div><h2>Your all done!</h2><p>waiting on other players</p></div>
        }

        if (this.props.currentRound === 1) {
            return <><h2>Write somthing for someone to draw</h2><input type="textbox" className="initalinput" placeholder="a dog with a trumpet"></input><div className="Game-DoneButton" onClick={this.props.nowDone}>Done</div></>
        }


        return this.props.currentRound % 2 === 0
            ? <Drawing ready={this.props.nowDone}/>
            : <Writing ready={this.props.nowDone}/>
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.players,
        playerId: state.playerId,
        gameId: state.game,
        playerIdList: state.playerIdList
    }
}

export default connect(mapStateToProps)(Game)
import React from 'react'
import { updateRoundData } from '../actions/dataBase'
import { connect } from 'react-redux'
import { incrementCurrentRound} from '../actions/currentRound'
import Writing from './Writing'
import Drawing from './Drawing'
import { getPlayersInlobby } from '../apis/apis'
import { setPlayerIdList } from '../actions/playerIdList'
import GameScreen from './GameScreen'


class Game extends React.Component {

    state = {
        gameid: this.props.gameId, 
        round: 1,
        done: false,
        finnished: [],
        playerPosition:"",
    }

    userfinnished = () => {
        // console.log("this user clicked done")
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
            // console.log(`user ${res} finnished`)
            this.setState({
                finnished: [...this.state.finnished, res]
            })
            // console.log(this.props.players.length == this.state.finnished.length)
            // console.log(this.props.players.length, this.state.finnished.length)

            if(this.props.players.length == this.state.finnished.length && this.props.players.length >= 2 ) {
                // console.log("all users done")
                
                this.props.dispatch(incrementCurrentRound())

                this.setState({
                    round: this.state.round + 1,
                    done: false,
                    finnished: [],
                })
                
            }
        })
    }

    componentDidUpdate() {
        if(this.state.round > this.props.playerIdList.length) {
            this.props.history.push("/Gallery")
        }
    }

    
    render() {

        return (
            <div className="game-screen">
                <h2>{`Your game: ${this.state.gameid}`}</h2>
                <h1>{`Round ${this.state.round}: ${((this.state.round % 2) == 1) ? "write" : "draw"}`}</h1>
                <GameScreen isDone={this.state.done} currentRound={this.state.round} playerPosition={this.state.playerPosition} nowDone={this.userfinnished}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.players,
        playerId: state.playerId,
        gameId: state.game,
        roundNumber: state.currentRound,
        currentRound: state.currentRound,
        playerIdList: state.playerIdList
    }
}

export default connect(mapStateToProps)(Game)
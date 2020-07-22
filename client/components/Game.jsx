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
        gameid: this.props.gameId,       //fix this later
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

            if(this.props.players.length == this.state.finnished.length && this.props.players.length >= 3 ) {
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
            <>
              
                <div className="Game-h2 center"><h2>{`Your game: ${this.state.gameid}`}</h2></div>
                <center>
                    <div className="gamewrap">
                        {/* <p onClick={this.userfinnished}>simulate done</p> */}
                        <span><h1 className="Game-h1-Round">{`Round ${this.state.round} ${((this.state.round % 2) == 1) ? "write" : "draw"}`}</h1></span>

                        <GameScreen isDone={this.state.done} currentRound={this.state.round} playerPosition={this.state.playerPosition} nowDone={this.userfinnished}/>

                    </div>
                </center>
            </>
        )
    }
}

// class GameScreen extends React.Component {

//     state = {
//         roundOneText: "",
//     }

//     handleChange = (event) => {
//         this.setState({
//             roundOneText: event.target.value
//         })
//     }

//     // findPlayerToSendTo = () => {
//     //     console.log(this.props.playerIdList);
//     //     let positionNumber = this.props.playerPosition + (this.props.currentRound - 1)
//     //     if (positionNumber > this.props.playerIdList.length){
//     //         return this.props.playerIdList[positionNumber - (this.props.playerIdList + 1)]
//     //     } else {
//     //         return this.props.playerIdList[positionNumber]
//     //     }
//     // }

//     handleClick = () => {
//         // const playerToSendTo = this.props.playerIdList[this.findPlayerToSendTo()]



//         this.props.nowDone()
//         this.props.dispatch(updateRoundData({
//             gameId: this.props.gameId, 
//             dbdata: {
//               roundNumber: this.props.roundNumber,
//               playerId: this.props.playerId,
//               roundInfo: this.state.roundOneText,
//             }
//           }))
//     }

//     render() {
//         //console.log(this.userfinnished)
      
//         if (this.props.isDone) {
//             return <div><h2>Your all done!</h2><p>waiting on other players</p></div>
//         }

//         if (this.props.currentRound === 1) {
//             return <><h2>Write somthing for someone to draw</h2><input onChange={this.handleChange} type="textbox" className="initalinput" placeholder="a dog with a trumpet"></input><div className="Game-DoneButton" onClick={this.handleClick}>Done</div></>
//         }


//         return this.props.currentRound % 2 === 0
//             ? <Drawing ready={this.props.nowDone}/>
//             : <Writing ready={this.props.nowDone}/>
//     }
// }

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
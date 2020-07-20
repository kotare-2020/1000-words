import React from 'react'
import { updateRoundData } from '../actions/dataBase'
import { connect } from 'react-redux'
import { incrementCurrentRound} from '../actions/currentRound'
import Writing from './Writing'
import Drawing from './Drawing'
import { getPlayersInlobby } from '../apis/apis'
import { setPlayerIdList } from '../actions/playerIdList'


export class GameScreen extends React.Component {

    state = {
        roundOneText: "",
    }

    handleChange = (event) => {
        this.setState({
            roundOneText: event.target.value
        })
    }

    findPlayerToSendTo = () => {
        console.log(this.props.playerPosition)
        let positionNumber = this.props.playerPosition + (this.props.currentRound - 1)
        console.log('current pos', this.props.playerIdList[positionNumber])
        if (positionNumber > this.props.playerIdList.length){
            console.log('greater than', this.props.playerIdList[positionNumber - (this.props.playerIdList + 1)])
            return this.props.playerIdList[positionNumber - (this.props.playerIdList + 1)]
        } else {
            console.log('go down now', this.props.playerIdList[positionNumber])
            return this.props.playerIdList[positionNumber]
        }
    }

    handleClick = () => {
        const playerToSendToValue = this.findPlayerToSendTo()
        console.log('send to: ', playerToSendToValue, this.props.playerIdList[playerToSendToValue])
        // const playerToSendTo = this.props.playerIdList[playerToSendToValue]
        const playerToSendTo = playerToSendToValue



        this.props.nowDone()
      
        this.props.dispatch(updateRoundData({
            gameId: this.props.gameId, 
            dbdata: {
              roundNumber: this.props.roundNumber,
              playerId: playerToSendTo,
              roundInfo: this.state.roundOneText,
            }
          }))
    }

    roundDone = () => {
        const playerToSendToValue = this.findPlayerToSendTo()
        console.log('send to: ', playerToSendToValue, this.props.playerIdList[playerToSendToValue])
        // const playerToSendTo = this.props.playerIdList[playerToSendToValue]
        const playerToSendTo = playerToSendToValue



        this.props.nowDone()
      
        this.props.dispatch(updateRoundData({
            gameId: this.props.gameId, 
            dbdata: {
              roundNumber: this.props.roundNumber,
              playerId: playerToSendTo,
              roundInfo: this.state.roundOneText,
            }
          }))
    }

    render() {
        //console.log(this.userfinnished)
      
        if (this.props.isDone) {
            return <div><h2>Your all done!</h2><p>waiting on other players</p></div>
        }

        if (this.props.currentRound === 1) {
            return <><h2>Write somthing for someone to draw</h2><input onChange={this.handleChange} type="textbox" className="initalinput" placeholder="a dog with a trumpet"></input><div className="Game-DoneButton" onClick={this.handleClick}>Done</div></>
        }


        return this.props.currentRound % 2 === 0
            ? <Drawing ready={this.roundDone}/>
            : <Writing ready={this.roundDone}/>
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

export default connect(mapStateToProps)(GameScreen)
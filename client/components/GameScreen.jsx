import React from 'react'
import { updateRoundData } from '../actions/dataBase'
import { connect } from 'react-redux'
import { incrementCurrentRound } from '../actions/currentRound'
import Writing from './Writing'
import Drawing from './Drawing'
import { getPlayersInlobby } from '../apis/apis'
import { setPlayerIdList } from '../actions/playerIdList'


export class GameScreen extends React.Component {

    state = {
        roundData: "",
    }

    handleChange = (data) => {
        this.setState({
            roundData: data
        })
    }

    findPlayerToSendTo = () => {
        // console.log('playerPosition: ', this.props.playerPosition)
        let positionNumber = this.props.playerPosition + (this.props.currentRound - 1)
        // console.log('positionNumber:', positionNumber)
        // console.log(positionNumber, 'vs', this.props.playerIdList.length);
        if (positionNumber >= this.props.playerIdList.length) {
            // console.log('wrap');
            return this.props.playerIdList[positionNumber - (this.props.playerIdList.length)]
        } else {
            // console.log('dont wrap')
            return this.props.playerIdList[positionNumber]
        }
    }

    handleClick = () => {
        this.props.nowDone()
        this.props.dispatch(updateRoundData({
            gameId: this.props.gameId,
            dbdata: {
                roundNumber: this.props.roundNumber,
                playerId: this.props.playerId,
                roundInfo: this.state.roundData,
            }
        }))
    }

    roundDone = () => {
        const playerToSendToValue = this.findPlayerToSendTo()
        // console.log('send to: ', playerToSendToValue, this.props.playerIdList[playerToSendToValue])
        // const playerToSendTo = this.props.playerIdList[playerToSendToValue]
        const playerToSendTo = playerToSendToValue



        this.props.nowDone()

        this.props.dispatch(updateRoundData({
            gameId: this.props.gameId,
            dbdata: {
                roundNumber: this.props.roundNumber,
                playerId: playerToSendTo,
                roundInfo: this.state.roundData,
            }
        }))
    }

    handleSubmit = () => {
        event.preventDefault()
        this.handleClick()
    }

    render() {
        //console.log(this.userfinnished)

        if (this.props.isDone) {
            return <div><h2>You're all done!</h2><p>Waiting on other players to finish...</p></div>
        }

        if (this.props.currentRound === 1) {
            return <><h2>Write something for the next player to draw!</h2>
            <form onSubmit={this.handleSubmit}>
            <input required onChange={(e) => this.handleChange(e.target.value)} type="textbox" className="initalinput" placeholder="e.g. a dog with a trumpet"></input>
            <br></br>
            <button className="green" onClick={this.handleSubmit}>Done</button>
            </form>
            </>
        }


        return this.props.currentRound % 2 === 0
            ? <Drawing handleChange={this.handleChange} ready={this.roundDone} playerPosition={this.props.playerPosition}/>
            : <Writing handleChange={this.handleChange} ready={this.roundDone} playerPosition={this.props.playerPosition}/>
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
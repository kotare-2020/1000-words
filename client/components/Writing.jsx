import React from 'react'
import ViewSpace from './ViewSpace'
import { addUserTest } from "../api/api"
import { connect } from "react-redux"
import { getAllPlayerRounds } from '../api/api'

class Writing extends React.Component {

    state = {
        userText: ""
    }

    renderImage = () => {
        const { playerId } = this.props.playerId
        const { gameId } = this.props.gameId
        return getAllPlayerRounds(playerId, gameId) 
    }

    handleClick = () => {
        // send input 
        console.log(this.props.JSON)
    }

    submitText = () => {
        addUserTest(this.state.userText, this.props.currentRound, this.props.playerId)
    }

    updateUserText = (event) => {
        this.setState({
            userText: event.target.value
        })
    } 

    Instructions = () => {
        if (this.props.JSON != undefined) {
            return "Describe what you see!"
        } else {
            return "Write anything you can think of!"
        }
    }

    render() {
        console.log(this.props.JSON)
        return (
            <>
                <textarea name="writing" rows="5" cols="80" className="Writing_textInput center" onChange={this.updateUserText}></textarea>
                <div className="control-container center">
                <ViewSpace />
                </div>
                <button onClick={this.handleClick} className="Writing_button center">DONE</button>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        playerId: state.playerId,
        currentRound: state.currentRound,
        gameId: state.gameId,
    }
}

export default connect(mapStateToProps)(Writing)


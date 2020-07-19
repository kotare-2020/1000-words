import React from 'react'
import ViewSpace from './ViewSpace'
import { connect } from 'react-redux'
import { addRoundDataApi } from '../apis/apis'

class Writing extends React.Component {

    state = {
        writing: ""
    }

    handleChange = (event) => {
        this.setState({
            writing: event.target.value
        })
    }

    handleClick = () => {
        // send input 
        console.log(this.props.JSON)
    }

    Instructions = () => {
        if (this.props.JSON != undefined) {
            return "Describe what you see!"
        } else {
            return "Write anything you can think of!"
        }
    }

    postToDataBase = () => {
        addRoundDataApi({
            roundNumber: this.props.roundNumber,
            roundInfo: this.state.writing,
            player_id: this.props.player_id,
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        console.log(this.props.JSON)
        return (
            <>
                <textarea name="writing" rows="5" cols="80" className="Writing_textInput center" onChange={this.handleChange}>The cat was playing in the garden.</textarea>
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
        gameId: state.game,
        roundNumber: state.currentRound,
        player_id: state.playerId,
    }
}

export default connect(mapStateToProps)(Writing) 


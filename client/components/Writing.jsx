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
        this.postToDataBase()
    }

    postToDataBase = () => {
        addRoundDataApi({
            gameId: this.props.gameId,
            dbdata: {
            roundNumber: this.props.roundNumber,
            roundInfo: this.state.writing,
            playerId: this.props.playerId,
        }
    })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        console.log(this.props.JSON)
        return (
            <>
                <textarea name="writing" rows="5" cols="50" className="Writing_textInput center" onChange={this.handleChange}>The cat was playing in the garden.</textarea>
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
        playerId: state.playerId,
        currentRound: state.currentRound,
    }
}

export default connect(mapStateToProps)(Writing) 


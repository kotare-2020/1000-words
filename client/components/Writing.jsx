import React from 'react'
import ViewSpace from './ViewSpace'
import { connect } from 'react-redux'
import { addRoundDataApi } from '../apis/apis'

class Writing extends React.Component {

    state = {
        writing: ""
    }





    handleChange = (event) => {
        this.props.handleChange(event.target.value)

        this.setState({
            writing: event.target.value
        })
    }

    handleClick = () => {
        // send input 
        // console.log(this.props.JSON)
        this.props.ready()
        // this.postToDataBase()
    }

    // postToDataBase = () => {
    //     addRoundDataApi({
    //         gameId: this.props.gameId,
    //         dbdata: {
    //         roundNumber: this.props.roundNumber,
    //         roundInfo: this.state.writing,
    //         playerId: this.props.playerId,
    //     }
    // })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }

    handleSubmit = () => {
        event.preventDefault
        this.handleClick()
    }

    render() {
        return (
            <>
            <div className="Writing-page">
                <div className="center">
                    <textarea className="text-area" name="writing" rows="5" cols="35" className="Writing_textInput center" placeholder="Describe what you see!" required onChange={this.handleChange}></textarea>
                </div>
                <div className="control-container center">

                    <ViewSpace playerPosition={this.props.playerPosition} />

                </div>
                <div className="center">
                    <button onClick={this.handleSubmit} className="Writing_button center green">DONE</button>
                </div>
                </div>
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


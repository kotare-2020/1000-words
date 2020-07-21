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
        console.log(this.props.JSON)
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

    render() {
        return (
            <>
            <div className="center">
<<<<<<< HEAD
                <textarea name="writing" rows="5" cols="50" className="Writing_textInput center" placeholder="Describe what you see!" onChange={this.handleChange}></textarea>
||||||| 8a6beea
                <textarea name="writing" rows="5" cols="50" className="Writing_textInput center" defaultValue="Describe what you see!" onChange={this.handleChange}></textarea>
=======
                <textarea className="text-area" name="writing" rows="5" cols="35" className="Writing_textInput center" placeholder="Describe what you see!" onChange={this.handleChange}></textarea>
>>>>>>> 1a8db200c388e9e6eb7adf08012a30d87271c300
                </div>
                <div className="control-container center">
<<<<<<< HEAD
                <ViewSpace playerPosition={this.props.playerPosition}/>
||||||| 8a6beea
                <ViewSpace />
=======
                <ViewSpace />
                <ViewSpace />
>>>>>>> 1a8db200c388e9e6eb7adf08012a30d87271c300
                </div>
                <div className="center">
                <button onClick={this.handleClick} className="Writing_button center green">DONE</button>
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


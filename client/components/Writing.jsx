import React from 'react'
import ViewSpace from './ViewSpace'
import { connect } from 'react-redux'

class Writing extends React.Component {

    handleClick = () => {
        // send input 
        console.log(this.props.JSON)
    }

    render() {
        return (
            <>

                <textarea name="writing" rows="5" cols="50" className="Writing_textInput center">The cat was playing in the garden.</textarea>
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
    gameId: state.gameId,
    currentRound: state.currentRound,
    playerId: state.playerId
}
}
export default connect(mapStateToProps)(Writing)


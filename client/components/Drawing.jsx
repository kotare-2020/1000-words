import { connect } from 'react-redux'
import { addRoundDataApi } from '../apis/apis'
import React from 'react'
import Canvas from './Canvas'
import { updateRoundData } from '../actions/dataBase'


class Drawing extends React.Component {
  state = {
    canvas: "",
    drawing: null,
}
handleClick = () => {
    console.log("user clicked done")
    this.props.dispatch(updateRoundData({
      gameId: this.props.gameId, 
      dbdata: {
        roundNumber: this.props.roundNumber,
        playerId: this.props.playerId,
        roundInfo: this.state.drawing,
      }
    }))
    this.props.ready()
     // this.postToDataBase()
  }

  componentDidMount(){
    console.log(this.props)
  }

  saveDrawing = (drawing) => {
    this.setState({drawing: drawing})
  }

// postToDataBase = () => {
//     addRoundDataApi({
//         gameId: this.props.gameId,
//         dbdata: {
//         roundNumber: this.props.roundNumber,
//         roundInfo: this.state.drawing,
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
        <h1>Writing goes here!</h1>
        <div className = "control-container center">
          <Canvas saveDrawing={this.saveDrawing}/>
        </div>
        <button onClick={this.handleClick}>Done</button>
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

export default connect (mapStateToProps)(Drawing) 

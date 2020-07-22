import { connect } from 'react-redux'
import { addRoundDataApi } from '../apis/apis'
import React from 'react'
import Canvas from './Canvas'
import { updateRoundData } from '../actions/dataBase'
import { getRoundDataApi } from '../apis/apis'


class Drawing extends React.Component {
  state = {
    canvas: "",
    drawing: null,
    writing: "",
  }

  componentDidMount() {

    const findPlayerToSendTo = () => {
      let positionNumber = this.props.playerPosition + (this.props.currentRound - 1)
      if (positionNumber >= this.props.playerIdList.length) {
        return this.props.playerIdList[positionNumber - (this.props.playerIdList.length)]
      } else {
        return this.props.playerIdList[positionNumber]
      }
    }
    
    getRoundDataApi(findPlayerToSendTo(), this.props.currentRound - 1, this.props.gameId)
      .then(res => {
        let drawing = res["round" + (this.props.currentRound - 1)]
        if (drawing == null) {
          getRoundDataApi(findPlayerToSendTo(), this.props.currentRound - 1, this.props.gameId)
            .then(res => {
              let drawing = res["round" + (this.props.currentRound - 1)]
              if (drawing == null) {
                console.log("done goofed twice now")
              }
              console.log("second attempt: ", res)
              this.setState({
                writing: drawing
              })
              return
            })
        }
        console.log("firs attempt: ", res)
        this.setState({
        writing: drawing
      })
        return
  })
}

handleClick = () => {
  // console.log("user clicked done")
  // this.props.dispatch(updateRoundData({
  //   gameId: this.props.gameId, 
  //   dbdata: {
  //     roundNumber: this.props.roundNumber,
  //     playerId: this.props.playerId,
  //     roundInfo: this.state.drawing,
  //   }
  // }))
  this.props.ready()
  // this.postToDataBase()
}

// componentDidMount(){
//   console.log(this.props)
// }

saveDrawing = (drawing) => {
  this.props.handleChange(drawing)
  this.setState({ drawing: drawing })
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
      <div className="flex-center">
        <h2>{this.state.writing}</h2>
      </div>
      <div className="control-container center">
        <Canvas saveDrawing={this.saveDrawing} playerPosition={this.props.playerPosition} />
      </div>
      <div className="flex-center">
        <button className="Drawing-DoneButton" onClick={this.handleClick}>Done</button>
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
    playerIdList: state.playerIdList
  }
}

export default connect(mapStateToProps)(Drawing) 

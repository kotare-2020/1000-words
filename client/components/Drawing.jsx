import { connect } from 'react-redux'
import { addRoundDataApi } from '../apis/apis'
import React from 'react'
import Canvas from './Canvas'


class Drawing extends React.Component {
  state = {
    drawing: ""
}
  handleClick=()=>{
    console.log("user clicked done")
    this.props.ready()
     // this.postToDataBase()
  }
  componentDidMount(){
    console.log(this.props)
  }
 

 



handleChange = (event) => {
    this.setState({
        drawing: event.target.value
    })
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
          <Canvas />
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

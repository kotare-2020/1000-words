import React from 'react'
import { connect } from 'react-redux'
//import { fetchRounds } from '../actions/allRounds'
import { getAllRounds, getPlayersInlobby} from "../apis/apis"

class Gallery extends React.Component {
  state = {
    gameid: 1,
    index: 0,
    slideshow: false,
    gamedata: [{ player: "" }],
    currentround: [],
    playersInGame: [],
 
  }

  
  componentDidMount() {

//this . state . index
    setTimeout(() => {
      // console.log(`the keuys are ${Object.keys(this.state.gamedata[0])} asf`)
     let roundarr = []
      for (const key of Object.keys(this.state.gamedata[this.state.index])) {
       roundarr.push(this.state.gamedata[this.state.index][key])
      }
      roundarr.shift()
        this.setState({
          currentround: roundarr
        })
    }, 100);



    getAllRounds(this.state.gameid)
      .then(res => {
        this.setState({
          gamedata: res
        })
      
      })
      .catch(err => {
        console.log(err)
      })


    getPlayersInlobby(1)
    .then(res => {
    let usernames = []
      res.body.map(user=>{
       usernames.push(user.player_name)
      })
      console.log(usernames)
      this.setState({playersInGame: usernames})
  
    })
    .catch(err => {
        console.log(err)
    })

  }
  func = () => {
    let roundarr = []
    for (const key of Object.keys(this.state.gamedata[this.state.index - 1])) {
      roundarr.push(this.state.gamedata[this.state.index][key])
     }
     roundarr.shift()
       this.setState({
         currentround: roundarr
       })
  }
  onPrev = () => {
  
  }
  onNext = () => {
    
  }

  render() {

    return (
      <div className="gallery-image-container">
        <center>
    
        {this.state.currentround.map((round, i) => {
     
          return <UserCard data={round} round={i + 1} users={this.state.playersInGame}/>
        }) }


        <button className="gallery-image-nav gallery-image-prev" onClick={this.onPrev}>{"<"}</button>
        <button className="gallery-image-nav gallery-image-next" onClick={this.onNext}>{">"}</button>
       
        </center>
      </div>
    )
  }
}

class UserCard extends React.Component {

  render() {
  
    if(this.props.round == 1) {
   
    return(<div>
   
      <h2>{this.props.users[this.props.round - 1]} wrote</h2>
      <p>{this.props.data}</p>
      </div>)
    }
    if(this.props.round > this.props.users.length) {
      return("")
    }
    if ((this.props.round % 2) == 1) {
      return (<div>
      
        <h2>{this.props.users[this.props.round - 1]} drew it like this</h2>
        <p>{this.props.data}</p>
      </div>)
    }
    else {
      return (<div>
        <h2>{this.props.users[this.props.round - 1]} thought it was</h2>
        <p>{this.props.data}</p>
      </div>)
    }

  }
}


function mapStateToProps(globalState) {
  return {
    rounds: globalState.rounds
  }
}




export default connect(mapStateToProps)(Gallery)


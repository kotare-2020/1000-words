import React from 'react'
import { connect } from 'react-redux'
//import { fetchRounds } from '../actions/allRounds'
import { getAllRounds, getPlayersInlobby} from "../apis/apis"
import Viewspace from "./ViewSpace"

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

    getAllRounds(this.state.gameid)
      .then(res => {
        let roundarr = []
       
        for (const key of Object.keys(res[this.state.index])) {
       
         roundarr.push(res[this.state.index][key])
        }
        roundarr.shift()
        this.setState({
            currentround: roundarr,
            gamedata: res,
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
      console.log( usernames.concat(usernames))
     
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
    let roundarr = []
    for (const key of Object.keys(this.state.gamedata[this.state.index - 1])) {
      roundarr.push(this.state.gamedata[this.state.index][key])
     }
     roundarr.shift()
       this.setState({
         currentround: roundarr,
         index: this.state.index - 1
       })
  console.log("prev")
  
  }
  onNext = () => {
    let roundarr = []
    console.log(this.state.index + 1)
    for (const key of Object.keys(this.state.gamedata[this.state.index + 1])) {
      roundarr.push(this.state.gamedata[this.state.index][key])
     }
     roundarr.shift()
       this.setState({
         currentround: roundarr,
         index: this.state.index + 1
       })
    console.log("next")
  }

  render() {

    return (
      <div className="gallery-image-container">
        <center>

    
        {console.log(Object.values(this.state.gamedata[this.state.index]).slice(1))}
        {(Object.values(this.state.gamedata[this.state.index]).slice(1)).map((round, i) => {
          
          return <UserCard data={round} round={i + 1} users={this.state.playersInGame} index={this.state.index}/>
        }) }
        {(this.state.index > 0) ? 
        <button className="gallery-image-nav gallery-image-prev" onClick={this.onPrev}>{"<"}</button> 
        : 
        <button className="gallery-image-nav gallery-image-prev" disabled>{"<"}</button>
        }

        {(this.state.index < this.state.playersInGame.length - 1) ? 
        <button className="gallery-image-nav gallery-image-next" onClick={this.onNext}>{">"}</button> 
        : 
        <button className="gallery-image-nav gallery-image-next" disabled>{">"}</button>
        }
        
       
        </center>
      </div>
    )
  }
}

class UserCard extends React.Component {

  render() {

    {  console.log("index: ",this.props.index)}
    if(this.props.round == 1) {
   
    return(<div>
   
      <h2>{this.props.users[this.props.round - 1]} wrote</h2>
      <p>{this.props.data}</p>
      </div>)
    }
    if(this.props.round > this.props.users.length) {
      return("")
    }
    if ((this.props.round % 2) == 0) {
      return (<div>
      
        <h2>{this.props.users[this.props.round - 1]} drew it like this</h2>
        <p>{this.props.data}</p>
        <Viewspace/>
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


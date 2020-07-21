import React from 'react'
import { connect } from 'react-redux'
//import { fetchRounds } from '../actions/allRounds'
import { getAllRounds, getPlayersInlobby} from "../apis/apis"
import GalleryImg from "./GalleryImg"
import Coppy from "./Coppy"

class Gallery extends React.Component {
  state = {
    gameid: 1,
    index: 0,
    slideshow: false,
    gamedata: [{ player: "" }],
    currentround: [],
    playersInGame: [],
    gameMatrix: [],
  }

  componentDidMount() {

    getAllRounds(this.props.gameid)
      .then(res => {
        let roundarr = []
       
        console.log(res)
        let newmatrix = [];
        res.map(row=>{
          newmatrix.push(Object.values(row).slice(1))
        })
        newmatrix = newmatrix
        console.log(newmatrix)


        

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

    getPlayersInlobby(this.props.gameid)
    .then(res => {
    let usernames = []
      res.body.map(user=>{
       usernames.push(user.player_name)
      })
       
     
      this.setState({playersInGame: usernames.concat(usernames)})
  
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

  
  }
  onNext = () => {
    window.scrollTo(0, 0);
    let roundarr = []
   
    for (const key of Object.keys(this.state.gamedata[this.state.index + 1])) {
      roundarr.push(this.state.gamedata[this.state.index][key])
     }
     roundarr.shift()
       this.setState({
         currentround: roundarr,
         index: this.state.index + 1
       })
 
  }



  render() {

    return (
      <div className="gallery-image-container">
        <center>

    
     
          {console.log(this.state.playersInGame)}
        {(Object.values(this.state.gamedata[this.state.index]).slice(1)).map((round, i) => {
         
          // console.log("array name: ", i)
       
          
          return <UserCard data={round} round={i + 1} users={this.state.playersInGame} index={this.state.index}/>
        }) }
        {(this.state.index > 0) ? 
        <button className="gallery-image-nav gallery-image-prev" onClick={this.onPrev}>{"<"}</button> 
        : 
        <button className="gallery-image-nav gallery-image-prev" disabled>{"<"}</button>
        }

        {(this.state.index < (this.state.playersInGame.length / 2) - 1) ? 
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

  
    if(this.props.round == 1) {
   
    return(<div>
   
      <p>{this.props.users[this.props.round - 1 + this.props.index]} wrote this:</p>
      <h2>{this.props.data}</h2>
      </div>)
    }
    if(this.props.round > this.props.users.length / 2) {    //    do / 2
      return("")
    }
    if ((this.props.round % 2) == 0) {
      return (<div>
        
        <p>{this.props.users[this.props.round - 1 + this.props.index]} drew it like this:</p>
        
        
        <GalleryImg data={this.props.data} custmId={"viewingSpace" + this.props.round}/>
        {/* <Coppy data={this.props.data}/> */}
      </div>)
    }
    else {
      return (<div>
        <p>{this.props.users[this.props.round - 1 + this.props.index]} thought it was:</p>
        <h2>{this.props.data}</h2>
      </div>)
    }

  }
}


function mapStateToProps(globalState) {
  return {
    gameid: globalState.game,
    rounds: globalState.rounds,
  }
}




export default connect(mapStateToProps)(Gallery)


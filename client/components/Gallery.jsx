import React from 'react'
import { connect } from 'react-redux'
//import { fetchRounds } from '../actions/allRounds'
import { getAllRounds, getPlayersInlobby } from "../apis/apis"
import GalleryImg from "./GalleryImg"
import Coppy from "./Coppy"

class Gallery extends React.Component {
  state = {
    gameid: 1,
    index: 0,
    slideshow: false,
    gamedata: [{ player: "" }],
    currentround: [],
    playersInGame: [[],[],[],[],[]],
    gameMatrix: [],
  }

  componentDidMount() {

    getAllRounds(this.props.gameid)
      .then(res => {
        let roundarr = []

        let newmatrix = [];
        res.map(row => {
          newmatrix.push(Object.values(row).slice(1))
        })
        newmatrix = newmatrix
       




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
        res.body.map(user => {
          usernames.push(user.player_name)
        })


        this.setState({ playersInGame: usernames })
        this.arrangePlayerNames()
      })
      .catch(err => {
        console.log(err)
      })

    
  }


  solve = (writerIndex, targetRound, totalPlayers) =>  {
    var targetPlayerIndex = writerIndex + targetRound - 1
    if (targetPlayerIndex >= totalPlayers) {
      targetPlayerIndex = targetPlayerIndex % totalPlayers
    }

    return targetPlayerIndex
  }


  arrangePlayerNames = () => {

    var arr = this.state.playersInGame.map(p => p).reverse()
    console.log(this.state.playersInGame.map(p => p).reverse())
    let newarr = []
    let matrix = []
    for (let j = 0; j < arr.length + 1; j++) {

      for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[this.solve(j, i, arr.length)])
      }
      // console.log(newarr)
      newarr = []
      matrix.push(newarr)
    }
    matrix.pop()
    this.setState({
      playersInGame: matrix.map(p => p).reverse()
    })
    console.log("new matrix", matrix.map(p => p).reverse())

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
      <div className="gallery-image-container center">
        <center>

          {/* {console.log(this.state.playersInGame)} */}
          {(Object.values(this.state.gamedata[this.state.index]).slice(1)).map((round, i) => {

            // console.log("array name: ", i)
         
            return <UserCard data={round} round={i + 1} users={this.state.playersInGame[this.state.index]} index={this.state.index} />
          })}
          {(this.state.index > 0) ?
            <button className="gallary-button" onClick={this.onPrev}>{"<"}</button>
            :
            <button className="gallary-button" disabled>{"<"}</button>
          }

          {(this.state.index < (this.state.playersInGame.length) - 1) ?

            <button className="gallary-button" onClick={this.onNext}>{">"}</button>
            :
            <button className="gallary-button" disabled>{">"}</button>
          }


        </center>
      </div>
    )
  }
}

class UserCard extends React.Component {

  render() {
   
    if (this.props.round == 1) {

      return (<div className="animate__animated animate__flipInX ">
           <div class="parallax__layer parallax__layer--base">
        <div class="title">Base Layer</div>
      </div>
        <p className="nameplate">{this.props.users[this.props.round - 1 ]} wrote this:</p>
        <h2 className="textplate">{this.props.data}</h2>
      </div>)
    }
    if (this.props.round > this.props.users.length) {    //    do / 2
      return ("")
    }
    if ((this.props.round % 2) == 0) {
      return (<div className="">

        <p className="nameplate">{this.props.users[this.props.round - 1 ]} drew it like this:</p>


        <GalleryImg data={this.props.data} custmId={"viewingSpace" + this.props.round} />
        {/* <Coppy data={this.props.data}/> */}
      </div>)
    }
    else {
      return (<div className="">
        <p className="nameplate">{this.props.users[this.props.round - 1 ]} thought it was:</p>
        <h2 className="textplate">{this.props.data}</h2>
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


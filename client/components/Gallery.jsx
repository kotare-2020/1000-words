import React from 'react'
import { connect } from 'react-redux'
//import { fetchRounds } from '../actions/allRounds'
import { getAllRounds } from "../apis/apis"

class Gallery extends React.Component {
    state = {
        index: 0,
        slideshow: false,
        gamedata: [{player: ""}],

    }

    componentDidMount() {
      getAllRounds(1)
      .then(res => {
        this.setState({
          gamedata: res
        })  
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

      }
      onPrev = () => {
        this.setState({
          index: index - 1
        })
      }
      onNext = () => {
        this.setState({
          index: index + 1
        })
      }
    startSlides = () => {
      this.setState({
        slideshow: true
      })
    }

    render () {
      
        return (
            <div className="gallery-image-container">
              <button onClick={this.startSlides}>ready</button>

                <div>{this.state.gamedata[this.state.index].player} Wrote: </div>
                <div>{this.state.gamedata[this.state.index].round1}</div>
                { console.log(this.state.gamedata[0].keys)  }
                {this.state.gamedata.map((round, i)=> {
                  return <UserCard data={round} round={i + 1}/>
                })}
                
                <img className="gallery-image center" width="500"/>
                <button className="gallery-image-nav gallery-image-prev" onClick={this.onPrev}>{"<"}</button>
                <button className="gallery-image-nav gallery-image-next" onClick={this.onNext}>{">"}</button>
                <div className="gallery-image-text"></div>
            </div>
        )
    }
}

class UserCard extends React.Component {
   
  render() {
    if((this.props.round % 2) == 1) {
      return (<div>
          <h2>{this.props.data.player} drew it like this</h2>
      <h3>{this.props.data.round1}</h3>
        </div>)
    }
    else {
      return (<div>
          <h2>{this.props.data.player} thought it was</h2>
      <h3>{this.props.data.round1}</h3>
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


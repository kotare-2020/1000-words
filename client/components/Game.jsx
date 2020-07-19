import React from 'react'

import { connect } from 'react-redux'

import Writing from './Writing'
import Drawing from './Drawing'


class Game extends React.Component {

    state = {
        gameid: this.props.gameId,       //fix this later
        round: 1,
        done: false,
        finnished: [],
    }

 
    userfinnished = () => {

        this.setState({ done: true })
        socket.emit("imdone", this.gameid)
    }
    
    render() {

        return (
            <>
              
                <div className="Game-h2 center"><h2>{`Your game: ${this.state.gameid}`}</h2></div>
                <center>
                    <div className="gamewrap">
                        {/* <p onClick={this.userfinnished}>simulate done</p> */}
                        <span><h1>{`Round ${this.state.round} ${((this.state.round % 2) == 1) ? "write" : "draw"}`}</h1></span>

                        <GameScreen isDone={this.state.done} currentRound={this.state.round} nowDone={this.userfinnished} />

                    </div>
                </center>
            </>
        )
    }
}

class GameScreen extends React.Component {
    render() {

      
        if (this.props.isDone) {
            return <div><h2>Your all done!</h2><p>waiting on other players</p></div>
        }

        if (this.props.currentRound === 1) {
            return <><h2>Write somthing for someone to draw</h2><input type="textbox" className="initalinput" placeholder="a dog with a trumpet"></input><div className="Game-DoneButton" onClick={this.props.nowDone}>Done</div></>
        }



        return this.props.currentRound % 2 === 0
            ? <Drawing />
            : <Writing />
    }
}

const mapStateToProps = (state) => {
    return {
        gameId: state.game
    }
}

export default connect(mapStateToProps)(Game)
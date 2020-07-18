import React from 'react'

import Writing from './Writing'
import Drawing from './Drawing'


class Game extends React.Component {

    state = {
        round: 1,
        done: false,
        finnished: [],
    }


    userfinnished = () => {
        this.setState({done: true})
    }
render() {  

    return(
       <center>
        <div className="gamewrap"><p onClick={this.userfinnished}>simulate done</p>
            <span><h1>{`Round ${this.state.round} ${((this.state.round % 2) == 1) ?  "write" : "draw"}` }</h1></span>

        <GameScreen isDone={this.state.done}/>
       
        </div>
        </center>
       
    )
}
}

class GameScreen extends React.Component {
    render() {
        if (this.props.currentRound === 1) {
             return <input type="textbox"></input>
        }

        if (this.props.isDone) {
            return <div><h2>Your all done!</h2><p>waiting on other players</p></div>
        }

        return this.props.currentRound % 2 === 0
            ? <Drawing />
            : <Writing />
    }
}

export default Game
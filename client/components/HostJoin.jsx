import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetRound} from '../actions/currentRound'
class HostJoin extends React.Component {
componentDidMount(){
    socket.emit("disconect", this.props.gameid)
    this.props.dispatch(resetRound())
}
    render() {
    return (
        
        <>
            <div className="HostJoin-Container center">
                <div>
                    <h1 className="HostJoin-h1">1000 Words</h1>
                    <p className="HostJoin-p0"> A picture says more than a thousand words! Gather your friends and play this hilarious drawing game. Watch everyone’s written prompt unravel into a story of its own!
</p>
                  
                </div>
                <div>
                    {/* <div className="navlin"><Link to="apis" onClick={this.scrollto}>APIs</Link></div> */}
                    <div className="text-link"></div>
                    <Link to="/create"> <button className="blue">Host</button></Link>
                    <Link to="/join"> <button className="green">Join</button></Link>
                </div>
            </div>
        </>
    )
}

}

function mapStateToProps(globalState) {
    return {
      gameid: globalState.game,
   
    }
  }
  
export default connect(mapStateToProps)(HostJoin)

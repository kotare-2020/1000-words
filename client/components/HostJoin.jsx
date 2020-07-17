import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

const HostJoin = () => {
    return (
        <>
            <div>
                <h1>1000 Words</h1>
                <p>Host or Join a game!</p>
            </div>
            <div>
                {/* <div className="navlin"><Link to="apis" onClick={this.scrollto}>APIs</Link></div> */}

                <button type="button" className="HostJoin-HostButton"><Link to="/CreateGame">Host</Link></button>
                <button type="button" className="HostJoin-JoinButton"><Link to="/JoinGame">Join</Link></button>
            </div>
        </>
    )
}

export default HostJoin



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

                <Link to="/create"><button type="button" className="HostJoin-HostButton">Host</button></Link>
                <Link to="/join"> <button type="button" className="HostJoin-JoinButton">Join</button></Link>
            </div>
        </>
    )
}

export default HostJoin



import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
const HostJoin = () => {
    return (
        <>
            <div className="HostJoin-Container center">
                <div>
                    <h1 className="HostJoin-h1">1000 Words</h1>
                    <p className="HostJoin-p0">You know what they say - A picture says more than a thousand words! Gather your friends and play this hilarious drawing game. Watch everyone’s written prompt unravel into a story of its own!
</p>
                    <p className="HostJoin-p1">Host or Join a game!</p>
                </div>
                <div>
                    {/* <div className="navlin"><Link to="apis" onClick={this.scrollto}>APIs</Link></div> */}
                    <div className="text-link"></div>
                    <Link to="/create"> <div  className="HostJoin-HostButton text-link button">Host</div></Link>
                    <Link to="/join"> <div className="HostJoin-JoinButton text-link button">Join</div></Link>
                </div>
            </div>
        </>
    )
}
export default HostJoin

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

const HostJoin = () => {
    return (
        <>
            <div className="HostJoin-Container center">
                <div>
                    <h1>1000 Words</h1>
                    <p>Host or Join a game!</p>
                </div>
                <div>
                    {/* <div className="navlin"><Link to="apis" onClick={this.scrollto}>APIs</Link></div> */}
                    <div class="text-link"></div>
                    <Link to="/create"> <div  className="HostJoin-HostButton text-link button">Host</div></Link>
                    <Link to="/join"> <div className="HostJoin-JoinButton text-link button">Join</div></Link>
                    
                </div>
            </div>
        </>
    )
}

export default HostJoin



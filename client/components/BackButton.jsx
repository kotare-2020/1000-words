import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const BackButton = () => {
    return (
        <React.Fragment>
            <Link to="/"><button type="button" className="backButton">Home</button></Link>
        </React.Fragment>
    )
}

export default BackButton
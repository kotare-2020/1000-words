import React from 'react'

import Writing from './Writing'
import Drawing from './Drawing'


class Game extends React.Component {

    state = {

    }

render() {
    return(
       
        <div className="gamewrap">
        <Writing/>
        <Drawing/>
        </div>
       
    )
}
}

export default Game

import React from 'react'
import Canvas from './Canvas'


class Drawing extends React.Component {

  render() {


    return (
      <>
        <h1>Writing goes here!</h1>
        <div className = "control-container center">
          <Canvas />
        </div>
        <button>Done</button>
      </>
    )
  }

}

export default Drawing

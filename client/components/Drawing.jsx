
import React from 'react'
import Canvas from './Canvas'


class Drawing extends React.Component {
  handleClick=()=>{
    this.props.ready()
  }
  componentDidMount(){
    console.log(this.props)
  }
  render() {

    return (
      <>
        <h1>Writing goes here!</h1>
        <div className = "control-container center">
          <Canvas />
        </div>
        <button onClick={this.handleClick}>Done</button>
      </>
    )
  }

}

export default Drawing

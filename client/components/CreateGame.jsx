import React from 'react'
import HostLobby from './HostLobby'

class CreateGame extends React.Component {

    state = {
        userName: '',
        hostLobby: false
    }

    handleChange = () => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            hostLobby: true
        })
      }

    render() {
    return(
    <>
    <h1>Enter Your Username!</h1>
    <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="userName" type="text">

          </input>
          <input type="submit" value="Create New Game!">
          {this.state.handleSubmit && <><HostLobby /></> }
          </input>
        </form>
    </>
        )
    }
}

export default CreateGame
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
    <div className="CreateGame-Container">
    <h1>Enter Your Username!</h1>
    <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="userName" type="text" className="CreateGame-Input">

          </input>
          <input type="submit" value="Create New Game!" className="CreateGame-NewGameButton">
          {this.state.handleSubmit && <><HostLobby /></> }
          </input>
        </form>
        </div>
    </>
        )
    }
}

export default CreateGame
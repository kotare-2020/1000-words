import React from 'react'

class JoinGame extends React.Component {

    state = {
        lobby: "",
        player: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.dispatch(saveTodo(this.state))
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>Lobby Number</label>
                <input type="text" name="lobby" onChange={this.handleChange}/>
                </div>
                <div>
                <label>User Name</label>
                <input type="text" name="player" onChange={this.handleChange}/>
                </div>           
                <input type="submit" value="Add"/>     
            </form>
        )
    }
}

export default JoinGame
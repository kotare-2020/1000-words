import React from 'react'

const HostLobby = () => {
    return (
        <>
            <h1>1000 Words</h1>
            <p>Host or Join a game!</p>
            <button onClick={this.creategame}>Host</button>
            <input type="text" className="gamekey" />
            <button onClick={this.joingame}>Join</button>
        </>
    )
}

export default HostLobby

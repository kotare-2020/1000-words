import React from 'react'

const geturl = "http://192.168.1.156:3000/api/"
var clientsocket = new WebSocket("ws://192.168.1.156:3000/", "protocolOne")

class SocketTest extends React.Component {
    state = {
        connected: false
    }
    
    componentDidMount(){
      
        clientsocket.onopen = (event) => {
            clientsocket.send("Web client connected"); 
            this.setState({connected: true})
        }
        
        clientsocket.onmessage = (event) =>{

                console.log(event.data);   
          }
        setInterval(() => {
            if(clientsocket.readyState == WebSocket.CLOSED) this.setState({connected: false})
        }, 500);
    }
    joingame = () => {
        clientsocket.send(`join ${ document.getElementById("gamekey").value} please`); 
    }
    creategame = () => {
        clientsocket.send(`create ${document.getElementById("name").value}`); 
    }
    render() {
        return (
            <>
            {this.state.connected ? <div>connected</div> : <div>connnection errerr!!!!!!</div>}
            <button onClick={this.joingame}>join</button>
            <input type="text" id="gamekey" placeholder="game key"/><br></br>
            <button onClick={this.creategame}>create</button>
            <input type="text" id="name" placeholder="name"/>
                  this is the socket
            </>
        )
    }

}

export default SocketTest
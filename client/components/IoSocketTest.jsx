import React from 'react'
//import socket from "socket.io"
//https://socket.io/docs/emit-cheatsheet/  <--- cheat sheet

class IoSocketTest extends React.Component {
    state = {
        connected: false
    }
    componentDidMount(){
       
        socket.on('connect', () => {
            
            this.setState({
                connected: true
            })
            socket.on("disconnect", () => {
                this.setState({
                    connected: false
                })
            })
            console.log("it seems we have a connection")
          });
        socket.on("error", res => {
            console.log(res)
            alert(`error ocured: ${res}`)
        })
        socket.on("roomjoin", res => {
            console.log("room works!")
        })
    }
    joingame = () => {
        socket.emit('join', document.getElementById("join").value);
    }
    creategame = () =>{
        socket.emit('create', document.getElementById("create").value);
    }

    render() {
        return (
            <>
            this is the test component<br></br>
            {this.state.connected ? <>connected</> : <>connection broke</>}<br></br>
            <input type="text" placeholder="game id" id="join"/><button onClick={this.joingame}>join</button><br></br>
            <input type="text" placeholder="username" id="create"/><button onClick={this.creategame}>create</button>
            </>
        )
    }
}
export default IoSocketTest
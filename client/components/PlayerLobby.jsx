import React from 'react'

class PlayerLobby extends React.Component {
    state = {
        connected: false,
        players: [],
    }
    componentDidMount(){
        
        socket.on('connect', () => {
            socket.emit("join", "test")
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
            console.log("err", res)
           // alert(`error ocured: ${res}`)
        })
        socket.on("joinlobby", res => {
          
            
       
            this.setState({
                players: [...this.state.players, ...res]
            })
        })

        socket.on("newlobbymemeber", res => {
            this.setState({
                players: [...this.state.players, res]
            })
        })
        socket.on("roomleave", res => {
            let newlist = this.state.players.filter(elem => elem != res)
           
            this.setState({
                players: newlist
            })
        })
       
    }
    
    render() {
        return (
            <>
            <ul>
              
            {this.state.players.map((elem, i) => {
                return (<li key={i}>{elem}</li>)
            })}
            </ul>
            this is the test component<br></br>
            {this.state.connected ? <>connected</> : <>connection broke</>}<br></br>
            
            </>
        )
    }
}
export default PlayerLobby
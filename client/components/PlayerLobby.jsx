import React from 'react'

class PlayerLobby extends React.Component {
    state = {
        connected: false,
        players: [],
        lobby: 0,
    }
    componentDidMount(){
       
        socket.on("error", res => {
            console.log("err", res)
           // alert(`error ocured: ${res}`)
        })
        socket.on("joinlobby", res => {
          
            
       
            this.setState({
                players: [...this.state.players, ...res]
            })
        })
        socket.on("lobby", res => {
           this.setState({
               lobby: res
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
            <br></br>
            list of users in lobby {this.state.lobby}

            <ul>
            
            {this.state.players.map((elem, i) => {
                return (<li key={i}>{elem}</li>)
            })}
            </ul>
            <br></br>
           
            
            </>
        )
    }
}
export default PlayerLobby
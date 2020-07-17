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
            Game code: {this.state.lobby}

            
            <br></br>
            {this.state.players.map((elem, i) => {
                return (<div key={i} className="nametag">{elem}</div>)
            })}
        
            <br></br>
           
            
            </>
        )
    }
}
export default PlayerLobby
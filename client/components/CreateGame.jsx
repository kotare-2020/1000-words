import React from 'react'
import HostLobby from './HostLobby'
import { addHostApi, addPlayerApi} from '../apis/apis'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";

class CreateGame extends React.Component {

    state = {
        userName: '',
        hostLobby: false,
        redirect: false,
    }

    handleChange = () => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      
      createHost = () => {
        
        addHostApi({
          host: document.getElementById('hostName').value
        }).then((res) => {
          console.log(res);
          socket.emit('send-nickname', document.getElementById("hostName").value)
          socket.emit("join", res.id)
        
         document.getElementById("gotolobby").click()
            // addPlayerApi
        })
        .catch(error => {
          console.log(error);
      })
      }

    render() {
    return(
    <>
    <div className="CreateGame-Container">
       
          <label>Enter Your Username!</label>
          <input className="CreateGame-Input" id="hostName" onChange={this.handleChange} name="userName" type="text"></input>
          {/* <input type="submit" value="Create New Game!"></input> */}
          <button  className="CreateGame-NewGameButton" onClick={this.createHost}>Create</button>    
          <Link to="/hostLobby" id="gotolobby"></Link>
          
         
        
    </div>
    </>
        )
    }
}

export default CreateGame
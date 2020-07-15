
import React from 'react'



class chat extends React.Component {
    state = {
   
    }
    componentDidMount(){
        $(function () {
            var socket = io();
            $('form').submit(function(){
              socket.emit('chat message', $('#m').val());
              $('#m').val('');
              return false;
            });
            socket.on('chat message', function(msg){
              $('#messages').append($('<li>').text(msg));
              window.scrollTo(0, document.body.scrollHeight);
            });
          });
    }
    render() {
        return (
            <>
              <ul id="messages"></ul>
<form action="">
  <input id="m" autocomplete="off" /><button>Send</button>
</form>


                   
            </>
        )
    }

}

export default chat
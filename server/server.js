const path = require('path')
const express = require('express')
const http = require('http');

var app = express();
const server = http.Server(app);
var io = require('socket.io')(server);


app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))

io.on('connection', function(socket){
   
    console.log(socket.id, "connected")
    
    io.to(socket.id).emit("sup ")
    io.emit('welcome')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on("join", res => {
        console.log(socket.id, "join", res)
       
            socket.join(res);
            io.to(socket.id).emit("roomjoin", "move")
            
    })
    socket.on("create", res => {

    }) 
    socket.on('chat message', function(msg){
    console.log('msg', msg)
    io.emit('chat message', msg);
    })
  })

module.exports = server

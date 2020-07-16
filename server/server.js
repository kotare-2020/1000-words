const path = require('path')
const express = require('express')
const http = require('http');

const game = require("./routes/game")
const players = require("./routes/players")
const rounds = require("./routes/rounds")

var app = express();
const server = http.Server(app);
var io = require('socket.io')(server);

app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))

app.use("/api/game", game)
app.use("/api/game", players)
app.use("/api/game", rounds)

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
        console.log(socket.id, "create", res)
        socket.join(res);
    }) 
    socket.on('chat message', function(msg){
    console.log('msg', msg)
    io.emit('chat message', msg);
    })
  })

module.exports = server

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
app.use("/api/players", players)
app.use("/api/rounds", rounds)

io.on('connection', function(socket){
   
    console.log(socket.id, "connected")
    
    io.to(socket.id).emit("sup ")
    io.emit('welcome')
    socket.on('disconnect', () => {
        console.log('user disconnected')
        socket.broadcast.emit('roomleave', socket.id);
        
    })


    socket.on("join", res => {
        
        console.log(socket.id, "join", res)
        io.to(res).emit("newlobbymemeber", socket.nickname);
        socket.join(res);
        
        //get every one in room and tell new user
        io.in(res).clients((err , clients) => {
            console.log(socket.nickname)
            io.to(socket.id).emit("joinlobby", clients)
        });
        
    })
    socket.on('send-nickname', nickname => {
        socket.nickname = nickname
        console.log(`set ${socket.id}'s nickname to ${nickname}`)
        console.log(socket.nickname)
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

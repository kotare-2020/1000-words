const path = require('path')
const express = require('express')
const http = require('http');

var app = express();
const server = http.Server(app);
var io = require('socket.io')(server);


app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))

io.on('connection', function(socket){
    console.log('connect')
    io.emit('welcome');
    socket.on('chat message', function(msg){
    console.log('msg', msg)
    io.emit('chat message', msg);
    });
  });

module.exports = server


// const path = require('path')
// var express = require('express')
// var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, './public')))


// io.on('connection', function(socket){
//       console.log('connect')
//       io.emit('welcome');
//   socket.on('chat message', function(msg){
//       console.log(msg)
//     io.emit('chat message', msg);
//   });
// });

// http.listen(port, function(){
//   console.log('listening on *:' + port);
// });
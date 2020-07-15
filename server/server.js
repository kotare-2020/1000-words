const path = require('path')
const express = require('express')

const http = require('http');
const WebSocket = require('ws');
const { WSAEWOULDBLOCK } = require('constants');

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))


const broadcastRegex = /^broad\:/;
const joinRX = /^join/;
const createRX = /^create/;

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });
var id = 0;
var lookup = {};
wss.on('connection', (ws) => {
    console.log("some one connected")
console.log("connected people ", wss.clients.size)
ws.id = id++;
lookup[ws.id] = ws;
console.log("new user has an id of ", id)

    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {
        console.log("recived a msg:", message)
        //log the received message and send it back to the client
        
        let msg = message.replace(broadcastRegex, '')
        
       
        
        if (broadcastRegex.test(message)) {
            message = message.replace(broadcastRegex, '');

            //send back the message to the other clients
            
            wss.clients
                .forEach(client => {
                   
                    if (client != ws) {
                        client.send(`user: ${message} `);
                    }    
                })  
        } 
        else if(joinRX.test(message)){

            //this turns the message "join # please" into an array and gets the scond part
            var n = message.split(" ");
            console.log("some one is trying to join lobby", n[1])
            //this is where a DB lookup for that looby should be ###################### todo
        }
        else if(createRX.test(message)){
            
            //this turns the message "join # please" into an array and gets the scond part
            
            console.log("some one is trying to create a lobby")
            //this is where a DB lookup for that looby should be ###################### todo
        }
        else {
            ws.send(`server res: ${message}`);
        }
    });


    //send immediatly a feedback to the incoming connection    
    ws.send(`Your connected!\n other users: ${(wss.clients.size - 1).toString()}`);
});


module.exports = server

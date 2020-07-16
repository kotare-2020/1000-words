const path = require('path')
const express = require('express')
const request = require("superagent")

const http = require('http');
const WebSocket = require('ws');
const { WSAEWOULDBLOCK } = require('constants');

const game = require("./routes/game")
const players = require("./routes/players")
const rounds = require("./routes/rounds")

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))

app.use('/api/game', game)
app.use('/api/players', players)
app.use('/api/rounds', rounds)

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
            var n = message.split(" ");

            
            //let lobbyId = myFunc(n[1],)
            //console.log(lobbyId)
            
            console.log('host', n[1])
            db.addHost(n[1])
            .then(host => {
                console.log({id: host[0]})
                ws.send("lobby", (host[0]).toString())
                //return {id: host[0]}
                
            })
            .catch(error => {
                // res.send(500).send("it broke")
                console.log(error.message)
            })
            
              //  ws.send( lobbyId)

               
                   
                    
            
            // request
            //     .post("/api/game")
            //     .send({host: "hellothere"})
            //     .catch(err => console.log(err))
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


const db = require('./db/game')

function myFunc (newHost) {
    console.log('host', newHost)
    db.addHost(newHost)
    .then(host => {
        console.log({id: host[0]})
        ws.send( res)
        return {id: host[0]}
        
    })
    .catch(error => {
        // res.send(500).send("it broke")
        console.log(error.message)
    })
}
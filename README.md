# MVP 

## Game
- Entry frame: One button to create game ("Host"); one button to join hosted game ("Join")

- Host button: redirects to a new view with a form to identify number of players; generates game ID; view has "Start" button

- Minimum number of players: 4; Maximum number of players: 10

- Join button: redirects to a new view with a form to input the game ID. Submitting the game ID redirects to a form asking for a user name before redirecting to a 'Player screen' ('lobby'), which will be displayed to all until the host starts the game.

- Start button: redirects to view 'Write something' (form); View has 'Done' button. As soon as every player has hit the 'Done'button, the next view is rendered (each player view calls the db, filling up player-slots, db listens to all slots filling up (see Rubin for details)).

- Write Something - Done: Triggers a view with the previous player's written prompt; 'Done' button (for draw screen). 

Alternate between the two views every time the db slots fill up on 'Done', until player.length has been reached.

If no more rounds to play, render view with gallery of all drawings belonging to the player's own prompt.

# STRETCH
Splash page 
Multiple colours
Timer

# Data base
### game
|game_id|host|
|--|--|
|1|rubin|
### players
|player_id|player_name|game_id|color|
|--|--|--|--|
|1|rubin|1|green|
### rounds
|player|write_1|draw_1|write_2|draw_2|write_3|draw_3|write_4|draw_4|write_5|draw_5|
|--|--|--|--|--|--|--|--|--|--|--|
|1|a naked sheep|draw_data|what it is|draw data|what it is|draw data|what it is|draw data|what it is|draw data|

# API 
| Method | Endpoint | Usage | Response |
| --- | --- | --- | --- |
|post|api/game/|creates a new game|returns game id|
|get|api/game:id/|checks if game exists|returns true / false|
|get|api/players:id/|get players of game|returns players in game group|
|post|api/players/|add player to player table|returns players in game group|
|get|api/rounds:id/|get all rounds for that game| returns all round for game|
|get|api/rounds/:gameId:roundnum|get spesific round & player draw/write|returns spesific round & player draw/write|
|post|api/rounds:id/|updates spesific found for game| returns round|

## request and response formats
**POST `api/game/`**

:request
```json
  {
    "host": "rubin",
  }
```
:response
```json
  {
    "id": 1,
  }
```
**get `api/game/:id`**

:response
```json
  {
    "game": true,
  }
```
**get `api/players/:id`**

:response
```json
[
  {
    "player_id": 1,
    "player_name": "rubin",
    "game_id": 1,
    "color": "black",
  },
  {
    "player_id": 2,
    "player_name": "jayden",
    "game_id": 1,
    "color": "black",
  },
]
```
**POST `api/players/`**

:request
```json
   {
    "player_name": "rubin",
    "game_id": 1,
    "color": "black",
  }
```
:response
```json
[
  {
    "player_id": 1,
    "player_name": "rubin",
    "game_id": 1,
    "color": "black",
  },
  {
    "player_id": 2,
    "player_name": "jayden",
    "game_id": 1,
    "color": "black",
  },
]
```
**get `api/rounds/:id`**

:response
```json
[
  {
    "player": 1,
    "write_1": "text",
    "draw_1": [data],
    "write_2": "text",
    "draw_2": [data],
    "write_3": "text",
    "draw_3": [data],
    "write_4": "text",
    "draw_4": [data],
    "write_5": "text",
    "draw_5": [data],
  },
  {
    "player": 2,
    "write_1": "text",
    "draw_1": [data],
    "write_2": "text",
    "draw_2": [data],
    "write_3": "text",
    "draw_3": [data],
    "write_4": "text",
    "draw_4": [data],
    "write_5": "text",
    "draw_5": [data],
  },
]
```
**get `api/rounds/:gameid:roundnum`**

:response
```json
  {
    "gameid": 2,
    "roundnum": 2,
    "data": [data] or "text", //depending on round
  }


```

**POST `api/round/:id`**

:request
```json
  {
    "player": 2,
    "round": 4,
    "data": [data] or "text", //depending on round
  }
```
:response
```json
    {
    "player": 2,
    "write_1": "text",
    "draw_1": [data],
    "write_2": "text",
    "draw_2": [data],   //<-- where data should be
    "write_3": "text",
    "draw_3": [data],
    "write_4": "text",
    "draw_4": [data],
    "write_5": "text",
    "draw_5": [data],
  },
   
```
## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:3000 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.


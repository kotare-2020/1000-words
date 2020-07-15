# MVP 
i want a space to draw witch then sends my drawing to someone else
i want the same as above for writing
i 

## Data base
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

## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.


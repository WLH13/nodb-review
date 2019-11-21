//package imports for express and cors. Cors is needed for making requests to other api's, whereas express is the framework we use to build a server in Node
const express = require('express'),
      cors = require('cors'),
      grassCtrl = require('./controllers/grassCtrl'),
      pokeCtrl = require('./controllers/pokeCtrl');
//const cors = require('cors');

//Invoke an instance of express to use its built-in methods
const app = express();

//top level middleware runs on every request to the server. In the below case, it runs cors and the json parser for every request.
app.use(cors());
app.use(express.json());

//Endpoints are how the client-side can request data from the server. They include the endpoint itself(/api/pokemon), and then a handler function. NOTE: resfulURL's refer to endpoints that use nouns that point to the data they are working with(/api/pokemon for example). DO NOT USE VERBS.
//ENDPOINTS
app.get('/api/wild-pokemon', grassCtrl.getWildPokemon);

app.get('/api/pokemon', pokeCtrl.getAllPokemon);
app.post('/api/pokemon', pokeCtrl.catch);
app.put('/api/pokemon/:id', pokeCtrl.rename);
app.delete('/api/pokemon/:id', pokeCtrl.release);

//app.listen allows our server to listen for requests on the given port.
//let port = 4040;
app.listen(4040, () => console.log('4040 happy little accidents'))
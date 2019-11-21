//array for pokemon that have been caught
const pokemonCaught = [];
//id to reference for put and delete
let id = 0;

module.exports = {
    //adds a new pokemon with info from the req.body
    catch: (req, res) => {
        const pokemonObj = {
            name: req.body.name,
            img: req.body.img,
            id: id++
        }
        pokemonCaught.push(pokemonObj);
        res.status(200).send(pokemonCaught);
    },
    //updates the name of the pokemon with the matching id
    rename: (req, res) => {
        const {id} = req.params;
        const {newName} = req.body;

        const index = pokemonCaught.findIndex(element => element.id === +id);
        pokemonCaught[index].name = newName;
        res.status(200).send(pokemonCaught);
    },
    //deletes the pokemon with the passed in id
    release: (req, res) => {
        const {id} = req.params;
        const index = pokemonCaught.findIndex(element => element.id === +id);
        pokemonCaught.splice(index, 1);
        res.status(200).send(pokemonCaught);
    },
    //sends pokemonCaught array to the client-side.
    getAllPokemon: (req, res) => {
        res.status(200).send(pokemonCaught);
    }
}
let pokemon = {};
const request = require("request")

pokemon.getPokemon = (req, res) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/`;

    request(url, (err, response, body)=>{
        if(err) throw console.log(err);

        const data = JSON.parse(body);
        res.json(data);
    })
}

pokemon.getPokemonByName = (req, res) =>{
    const name = req.params.name;
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    request(url, (err, response, body)=>{
        if(err) throw console.log(err);
        const data = JSON.parse(body)
        res.json(data);
    })
}

module.exports = pokemon;
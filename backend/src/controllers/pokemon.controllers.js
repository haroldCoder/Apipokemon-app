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
    const idOrName = req.params.idOrName;
    let url;
    if(isNaN(idOrName)){
        url = `https://pokeapi.co/api/v2/pokemon/${idOrName}`;
    }else{
        url = `https://pokeapi.co/api/v2/pokemon/${parseInt(idOrName)}`;
    }
    request(url, (err, response, body)=>{
        if(err) throw console.log(err);
        const data = JSON.parse(body)
        res.json(data);
    })
}

module.exports = pokemon;
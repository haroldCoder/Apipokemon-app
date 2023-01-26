let pokemon = {};
const request = require("request")
const conection = require("../DB/conection")

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

pokemon.postPokemon = (req, res) =>{
    const {name, id, experience, front_default, height} = req.body;
    conection.query(`INSERT INTO pokemon(name, id, experience, front_default, height) VALUE ("${name}", ${id}, ${experience}, "${front_default}", ${height})`, (err)=>{
       if(err) console.log("error, el pokemon ya existe");
       else{
        console.log("nuevo pokemon atrapado");
        res.send("nuevo pokemon atrapado"); 
       }
    })
    
}

module.exports = pokemon;
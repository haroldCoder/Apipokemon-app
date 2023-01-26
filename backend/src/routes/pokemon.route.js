const {Router} = require("express");
const route = Router()
const {getPokemon, getPokemonByName, postPokemon} = require("../controllers/pokemon.controllers");

route.route("/")
.get(getPokemon)
.post(postPokemon)

route.route("/:idOrName")
.get(getPokemonByName)

module.exports = route;
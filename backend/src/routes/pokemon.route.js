const {Router} = require("express");
const route = Router()
const {getPokemon, getPokemonByName} = require("../controllers/pokemon.controllers");

route.route("/")
.get(getPokemon)

route.route("/:idOrName")
.get(getPokemonByName)

module.exports = route;
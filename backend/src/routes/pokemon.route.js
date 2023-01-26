const {Router} = require("express");
const route = Router()
const {getPokemon, getPokemonByName} = require("../controllers/pokemon.controllers");

route.route("/")
.get(getPokemon)

route.get("/:name")
.get(getPokemonByName)

module.exports = route;
import { Move, Pokemon, Type } from "../models";
var types = require('./types.json')
var moves = require('./moves.json')
var pokemon = require('./pokedex.json')

const pokemonService = {
  getTypes: (): Type[] => {
    return types;
  },
  getAllPokemon: (): Pokemon[] => {
    return pokemon;
  },
  findPokemonById: (id): Pokemon => {
    return pokemon.find(p => p.id === id);
  },
}

export { pokemonService }
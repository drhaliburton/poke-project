import { Pokemon, Type } from "../models";
var types = require('../../db/types.json')
var pokemon = require('../../db/pokedex.json')

const pokemonService = {
  getTypes: (): Type[] => {
    return types;
  },
  getAllPokemon: (): Pokemon[] => {
    return pokemon;
  },
  findPokemonById: (id: Pokemon["id"]): Pokemon => {
    return pokemon.find((p: Pokemon) => p.id === id);
  },
}

export { pokemonService }
import { Pokemon, PokemonType, Type } from "../models";
var types = require('../../db/types.json')
var pokemon = require('../../db/pokedex.json')

const pokemonService = {
  getTypes: (): Type[] => {
    return types;
  },
  getAllPokemon: (): Pokemon[] => {
    return pokemon;
  },
  getPokemonByType: (type: PokemonType): Pokemon => {
    return pokemon.filter((p: Pokemon) => p.type.includes(type));
  },
  findPokemonById: (id: Pokemon["id"]): Pokemon => {
    return pokemon.find((p: Pokemon) => p.id === id);
  },
}

export { pokemonService }
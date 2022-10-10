import { Move, Pokemon, PokemonType } from "../models";
import { pokemonService } from "./pokemonService";
var moves = require('../../db/moves.json')

const movesService = {
  getMoves: (): Move[] => {
    return moves;
  },
  getMovesForTypes: (types: PokemonType[]): Move[] => {
    return moves.filter((move: Move) => types.includes(move.type));
  },
  getMovesByPokemonId: (pokemonId: Pokemon["id"]): Move[] => {
    const pokemon = pokemonService.findPokemonById(pokemonId);
    const movesForPokemon = movesService.getMovesForTypes(pokemon.type)
    return movesForPokemon;
  }
}

export { movesService }
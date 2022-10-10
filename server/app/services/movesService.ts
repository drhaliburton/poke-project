import { Move, PokemonType } from "../models";
var moves = require('./moves.json')

const movesService = {
  getMoves: (): Move[] => {
    return moves;
  },
  getMovesForTypes: (types: PokemonType[]): Move[] => {
    return moves.filter(p => types.includes(moves.type));
  },
}

export { movesService }
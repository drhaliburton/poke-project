import { PokemonType } from "./PokemonType"

export type Move = {
  id: number;
  accuracy: number;
  category: string;
  cname: string;
  ename: string;
  jname: string,
  power: number,
  pp: number;
  type: PokemonType
}
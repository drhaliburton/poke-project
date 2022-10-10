import { PokemonType } from "./PokemonType";
import { Translation } from "./Translation";

type Base = Record<string, number>;

export type Pokemon = {
  id: number;
  name: Translation;
  type: PokemonType[];
  base: Base
}

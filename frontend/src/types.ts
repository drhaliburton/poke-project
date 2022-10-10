
type Move = {
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

type Translation = {
  english: string
  chineese?: string
  japanese?: string
  french?: string
}

export enum PokemonType {
  NORMAL = 'Normal',
  FIGHTING = 'Fighting',
  FLYING = 'Flying',
  POISON = 'Poison',
  GROUND = 'Ground',
  ROCK = 'Rock',
  BUG = 'Bug',
  GHOST = 'Ghost',
  STEEL = 'Steel',
  FIRE = 'Fire',
  WATER = 'Water',
  GRASS = 'Grass',
  ELECTRIC = 'Electric',
  PSYCHIC = 'Psychic',
  ICE = 'Ice',
  DRAGON = 'Dragon',
  DARK = 'Dark',
  FAIRY = 'Fairy'
}

type Type = Translation & {
  english: PokemonType
}

type Pokemon = {
  id: number;
  name: Translation;
  type: PokemonType[];
  base: Record<string, number>
}

export type { Pokemon, Type, Move }
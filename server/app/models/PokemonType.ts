import { Translation } from "./Translation";

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

export type Type = Translation & {
  english: PokemonType
}

import { Pokemon, PokemonType, Type } from "../types"

const base = "http://localhost:3000"

const fetchData = (path: string = '/', body = {}) => fetch(base + path)
  .then(response => response.json())

const getPokemon = (): Promise<Pokemon[]> => fetchData('/pokemon')

const getPokemonByType = (type: PokemonType): Promise<Pokemon[]> => fetchData(`/pokemon/type/${type}`)

const getTypes = (): Promise<Type[]> => fetchData('/pokemon/types')

export { getPokemon, getPokemonByType, getTypes };
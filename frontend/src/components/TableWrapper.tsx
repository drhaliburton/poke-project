import { useState, useEffect } from 'react'
import { getPokemonByType, getTypes } from './fetchData'
import { Pokemon, PokemonType, Type } from '../types'
import { Table } from './Table'

const TableWrapper = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [types, setTypes] = useState<Type[]>([])
  const [selectedType, setSelectedType] = useState<PokemonType>()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (selectedType) {
      setIsLoading(true)
      getPokemonByType(selectedType).then((data) => {
        setPokemon(data)
        setIsLoading(false)
      })
    }
  }, [selectedType])

  useEffect(() => {
    if (!types.length && !isLoading) {
      getTypes().then((data) => {
        setTypes(data)
      })
    }
  }, [isLoading, pokemon, types])

  return <>
    <select
      onChange={(event) => setSelectedType(event.target.value as PokemonType)}
    >
      <option value="undefined">Select a type...</option>
      {types.map(type => <option value={type.english}>{type.english}</option>)}
    </select>
    {pokemon.length || isLoading ? <Table pokemon={pokemon} isLoading={isLoading}></Table> : undefined}
  </>
}

export { TableWrapper }
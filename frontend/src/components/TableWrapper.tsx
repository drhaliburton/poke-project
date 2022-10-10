import { useState, useEffect } from 'react'
import { getPokemonByType, getTypes } from './fetchData'
import { Pokemon, PokemonType, Type } from '../types'
import { Table } from './Table'

const TableWrapper = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>();
  const [types, setTypes] = useState<Type[]>()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true)
      const promises = []
      if (!pokemon) {
        const getPokemonRequest = getPokemonByType(PokemonType.BUG).then((data) => {
          setPokemon(data)
        })
        promises.push(getPokemonRequest)
      }
      if (!types) {
        const getTypesRequest = getTypes().then((data) => {
          console.log(data)
          setTypes(data)
        })
        promises.push(getTypesRequest)
      }
      Promise.all([promises]).then(() => setIsLoading(false))
    }
  }, [isLoading, pokemon, types])

  return <Table pokemon={pokemon || []} types={types || []} isLoading={isLoading}></Table>
}

export { TableWrapper }
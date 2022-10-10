import { itemService, movesService, pokemonService } from "./services"

const express = require('express')
const app = express()
const port = 3000

app.get('/pokemon', (req, res) => {
  const pokemon = pokemonService.getAllPokemon()
  res.send(pokemon)
})

app.get('/pokemon/:id', (req, res) => {
  const pokemon = pokemonService.findPokemonById(params.id)
  res.send(pokemon)
})

app.get('/pokemon/types', (req, res) => {
  const types = pokemonService.getTypes()
  res.send(types)
})

app.get('/moves/types', (req, res) => {
  const moves = movesService.getMovesForTypes(req.body.types)
  res.send(moves)
})

app.get('/items', (req, res) => {
  const items = itemService.getItems()
  res.send(items)
})

app.listen(port, () => {
  console.log(`Pokedex listening on port ${port}`)
})
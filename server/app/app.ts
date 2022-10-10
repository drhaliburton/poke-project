import { itemService, movesService, pokemonService } from "./services"
import express, { Response } from 'express'
const app = express();

const port = 3000

const handleBadRequest = (res: Response, message: string): Response => {
  res.status(400)
  return res.send(message)
}

app.get('/pokemon', (_req, res) => {
  const pokemon = pokemonService.getAllPokemon()
  res.send(pokemon)
})

app.get('/pokemon/find/:id', (req, res) => {
  const id = req.params.id && parseInt(req.params.id)
  if (!id) {
    handleBadRequest(res, 'Integer "id" is required')
  }
  const pokemon = pokemonService.findPokemonById(id)
  res.send(pokemon)
})

app.get('/pokemon/types', (_req, res) => {
  const types = pokemonService.getTypes()
  res.send(types)
})

app.get('/moves/types', (req, res) => {
  const id = req.body.types && req.body.types.length
  if (!id) {
    handleBadRequest(res, 'List of pokemon types required')
  }
  const moves = movesService.getMovesForTypes(req.body.types)
  res.send(moves)
})

app.get('/items', (_req, res) => {
  const items = itemService.getItems()
  res.send(items)
})

app.listen(port, () => {
  console.log(`Pokedex listening on port ${port}`)
})
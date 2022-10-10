import { itemService, movesService, pokemonService } from "./services"
import { PokemonType } from "./models";
import express, { Response } from 'express'
import cors from 'cors'

const app = express();
app.use(cors())

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

app.get('/pokemon/type/:type', (req, res) => {
  const pokemonType = req.params.type as PokemonType
  const types = pokemonService.getPokemonByType(pokemonType)
  res.send(types)
})

app.get('/pokemon/types', (_req, res) => {
  const types = pokemonService.getTypes()
  res.send(types)
})


app.get('/moves/types/:pokemonId', (req, res) => {
  const id = req.params.pokemonId && parseInt(req.params.pokemonId)
  if (!id) {
    handleBadRequest(res, 'Pokemon ID is required')
  }
  const moves = movesService.getMovesByPokemonId(id)
  res.send(moves)
})

app.get('/items', (_req, res) => {
  const items = itemService.getItems()
  res.send(items)
})

app.listen(port, () => {
  console.log(`Pokedex listening on port ${port}`)
})
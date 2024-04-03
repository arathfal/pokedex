import { PokemonDataType } from '@/types/pokemon'

export default async function getPokemons(page = 1): Promise<PokemonDataType> {
  const LIMIT = 12
  const offset = (page - 1) * LIMIT
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`)
  const json = await res.json()

  return json
}

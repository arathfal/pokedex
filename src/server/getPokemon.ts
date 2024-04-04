import processPokemon from '@/lib/processPokemon'
import { PokemonDetailType } from '@/types/pokemon'

export default async function getPokemon(name: string): Promise<PokemonDetailType> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const json = await res.json()

  return processPokemon(json)
}

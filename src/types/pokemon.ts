export type PokemonDetailType = {
  name: string
  url: string
}

export type PokemonDataType = {
  count: number
  next: string | null
  previous: string | null
  results: Array<PokemonDetailType>
}

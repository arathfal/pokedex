export type PokemonDataType = {
  name: string
  url: string
}

export type PokemonResponseDataType = {
  count: number
  next: string | null
  previous: string | null
  results: Array<PokemonDataType>
}

export type Type = {
  slot: number
  type: PokemonDataType
}

export type Stat = {
  base_stat: number
  effort: number
  stat: PokemonDataType
}

export type Ability = {
  ability: PokemonDataType
  is_hidden: boolean
  slot: number
}

export type Status = {
  [key: string]: number
}

export type PokemonDetailType = {
  id: number
  name: string
  height: number
  weight: number
  image: string
  abilities: Ability[]
  stats: Status
  types: Type[]
}

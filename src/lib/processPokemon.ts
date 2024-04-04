import { Ability, Stat, Type } from '@/types/pokemon'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function processPokemon(pokemon: any) {
  const image =
    pokemon?.sprites?.other?.['official-artwork']?.front_default ||
    pokemon?.sprites?.other?.home?.front_default
  const abilities = pokemon?.abilities?.map((ab: Ability) => ab?.ability?.name)
  const types = pokemon?.types?.map((ty: Type) => ty?.type?.name)
  const stats = (pokemon?.stats as Stat[])?.reduce((acc, curr) => {
    return {
      ...acc,
      [curr?.stat?.name]: curr?.base_stat
    }
  }, {})

  return {
    id: pokemon?.id,
    name: pokemon?.name,
    height: pokemon?.height / 10,
    weight: pokemon?.weight / 10,
    image,
    abilities,
    stats,
    types
  }
}

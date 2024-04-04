import { Dispatch, SetStateAction, createContext } from 'react'

import { FilterType } from '@/types/filter'
import { PokemonDetailType } from '@/types/pokemon'

export type ContextValue = {
  filter: FilterType
  comparison: {
    selected: PokemonDetailType[]
    setSelected: Dispatch<SetStateAction<PokemonDetailType[]>>
  }
}

// @ts-expect-error returns `false` the default value will be defined inside provider.
export default createContext<ContextValue>()

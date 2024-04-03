import { Dispatch, SetStateAction } from 'react'

export type SortType = 'asc' | 'desc' | 'default'

export type FilterType = {
  sort: SortType
  setSort: Dispatch<SetStateAction<SortType>>
  name: string
  setName: Dispatch<SetStateAction<string>>
}

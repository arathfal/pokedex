import { createContext } from 'react'

import { FilterType } from '@/types/filter'

// @ts-expect-error returns `false` the default value will be defined inside provider.
export default createContext<FilterType>()

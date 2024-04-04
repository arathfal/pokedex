'use client'
import { FC, useEffect, useMemo, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import store, { ContextValue } from '@/store'
import { CommonProps } from '@/types/common'
import { SortType } from '@/types/filter'
import { PokemonDetailType } from '@/types/pokemon'

const { Provider: StoreProvider } = store

const Provider: FC<CommonProps> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [sort, setSort] = useState<SortType>('default')
  const [name, setName] = useState<string>('')
  const [selected, setSelected] = useState<PokemonDetailType[]>([])

  useEffect(() => {
    if (pathname === '/') router.replace(`${pathname}?page=${1}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value: ContextValue = useMemo(() => {
    return {
      filter: {
        sort,
        setSort,
        name,
        setName
      },
      comparison: {
        selected,
        setSelected
      }
    }
  }, [sort, name, selected])

  return <StoreProvider value={value}>{children}</StoreProvider>
}

export default Provider

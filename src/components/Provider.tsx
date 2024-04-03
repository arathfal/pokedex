'use client'
import { FC, useEffect, useMemo, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import store from '@/store'
import { CommonProps } from '@/types/common'
import { FilterType, SortType } from '@/types/filter'

const { Provider: StoreProvider } = store

const Provider: FC<CommonProps> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [sort, setSort] = useState<SortType>('default')
  const [name, setName] = useState<string>('')

  useEffect(() => {
    router.replace(`${pathname}?page=${1}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value: FilterType = useMemo(() => {
    return {
      sort,
      setSort,
      name,
      setName
    }
  }, [sort, name])

  return <StoreProvider value={value}>{children}</StoreProvider>
}

export default Provider

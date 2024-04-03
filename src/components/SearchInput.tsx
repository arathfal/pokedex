'use client'

import { ChangeEventHandler, useCallback } from 'react'

import useFilter from '@/hooks/useFilter'

const SearchInput = () => {
  const { name, setName } = useFilter()

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setName(e?.target?.value)
    },
    [setName]
  )

  return (
    <input
      className="h-10 w-96 rounded-md bg-slate-50 px-4 py-2 text-slate-900"
      type="search"
      value={name}
      onChange={handleChange}
      placeholder="Search your pokemon..."
    />
  )
}

export default SearchInput

'use client'

import { MouseEventHandler, useCallback, useMemo, useState } from 'react'

import usePokemons from '@/hooks/usePokemons'
import { SortType } from '@/types/filter'

import Button from './Button'

export default function Sorting() {
  const {
    filter: { sort, setSort }
  } = usePokemons()
  const isDefault = sort === 'default'
  const [showOption, setShowOption] = useState<boolean>(false)

  const onSelectSort = useCallback(
    (value: SortType) => {
      setSort(value)
      setShowOption(false)
    },
    [setSort, setShowOption]
  )

  const onRemoveSort: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation()
      onSelectSort('default')
    },
    [onSelectSort]
  )

  const buttonText = useMemo(() => {
    switch (sort) {
      case 'asc':
        return 'Sort by Name (A-Z)'
      case 'desc':
        return 'Sort by Name (Z-A)'
      default:
        return 'Sort by Name'
    }
  }, [sort])

  return (
    <div className="relative w-52">
      <Button
        onClick={() => setShowOption(true)}
        className="flex w-full items-center justify-between gap-2"
      >
        {buttonText}
        <span className="flex flex-col">
          {isDefault ? (
            <>
              <span className="text-[10px]">&#x25B2;</span>
              <span className="text-[10px]">&#x25BC;</span>
            </>
          ) : (
            <button onClick={onRemoveSort} className="font-bold">
              &#x2715;
            </button>
          )}
        </span>
      </Button>
      {showOption && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-slate-50 p-2 shadow-md shadow-slate-950/30 ">
          <Button onClick={() => onSelectSort('asc')} className="w-full px-2 text-left">
            Sort by Name (A-Z)
          </Button>
          <Button onClick={() => onSelectSort('desc')} className="w-full px-2 text-left">
            Sort by Name (Z-A)
          </Button>
        </div>
      )}
    </div>
  )
}

'use client'

import { MouseEventHandler, useCallback, useMemo, useState } from 'react'

import useFilter from '@/hooks/useFilter'
import { SortType } from '@/types/filter'

export default function Sorting() {
  const { sort, setSort } = useFilter()
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
      <button
        onClick={() => setShowOption(true)}
        className="flex h-10 w-full items-center justify-between gap-2 rounded-md bg-slate-50 px-4 py-2 text-slate-900"
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
      </button>
      {showOption && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-white p-2 shadow-md shadow-slate-950/30">
          <button
            onClick={() => onSelectSort('asc')}
            className="w-full rounded-md bg-slate-50 p-2 text-left text-slate-900 transition-all hover:bg-slate-300"
          >
            Sort by Name (A-Z)
          </button>
          <button
            onClick={() => onSelectSort('desc')}
            className="w-full rounded-md bg-slate-50 p-2 text-left text-slate-900 transition-all hover:bg-slate-300"
          >
            Sort by Name (Z-A)
          </button>
        </div>
      )}
    </div>
  )
}

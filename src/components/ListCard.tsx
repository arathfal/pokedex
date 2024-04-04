'use client'
import { FC, useMemo, useState } from 'react'

import usePokemons from '@/hooks/usePokemons'
import cn from '@/lib/cn'
import { PokemonDataType } from '@/types/pokemon'

import Button from './Button'
import Card from './Card'
import ModalComparison from './ModalComparison'

type ListCardProps = {
  className?: string
  list: PokemonDataType[]
}

const ListCard: FC<ListCardProps> = ({ className, list }) => {
  const {
    filter: { name, sort },
    comparison: { selected, setSelected }
  } = usePokemons()
  const [showComparison, setShowComparison] = useState<boolean>(false)

  const isDisabledCompare = selected?.length < 2
  const isHasSelected = selected?.length > 0

  const pokemons = useMemo(() => {
    const isSorted = sort !== 'default'
    if (name || isSorted) {
      let newList = Array.from(list)
      if (name) {
        newList = newList?.filter((poke) =>
          poke?.name?.toLowerCase()?.includes(name?.toLowerCase())
        )
      }

      if (isSorted) {
        newList = newList?.sort((a, b) => {
          const nameA = a?.name?.toLowerCase()
          const nameB = b?.name?.toLowerCase()
          if (sort === 'asc') {
            return nameA < nameB ? -1 : 1
          }

          return nameA > nameB ? -1 : 1
        })
      }

      return newList
    }

    return list
  }, [name, list, sort])

  return (
    <div className={cn('relative', isHasSelected && ' pb-10', className)}>
      <ModalComparison
        show={showComparison && !isDisabledCompare}
        onLeave={() => {
          setShowComparison(false)
        }}
      />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {pokemons?.map((pokemon, index) => {
          return <Card key={`${index}-${pokemon?.name}`} url={pokemon?.url} name={pokemon?.name} />
        })}
      </div>
      <div
        className={cn(
          'fixed bottom-0 left-0 z-10 flex h-auto w-full items-center justify-between gap-4 bg-slate-50 p-4 text-slate-950 shadow-md shadow-slate-950/30 transition-transform',
          !isHasSelected && 'translate-y-full'
        )}
      >
        <h5 className="text-lg font-bold text-slate-950">Compare your pokemons</h5>
        <div className="flex items-center gap-4">
          {isDisabledCompare && (
            <span className="text-xs text-slate-600">Select 1 more to compare</span>
          )}
          <Button variant="red" className="w-28" onClick={() => setSelected([])}>
            Cancel
          </Button>
          <Button
            disabled={isDisabledCompare}
            className="w-28"
            variant="green"
            onClick={() => setShowComparison(true)}
          >
            Compare
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ListCard

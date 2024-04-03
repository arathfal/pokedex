'use client'
import { FC, useMemo } from 'react'

import useFilter from '@/hooks/useFilter'
import cn from '@/lib/cn'
import { PokemonDetailType } from '@/types/pokemon'

import Card from './Card'

type ListCardProps = {
  className?: string
  list: PokemonDetailType[]
}

const ListCard: FC<ListCardProps> = ({ className, list }) => {
  const { name, sort } = useFilter()

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
    <div
      className={cn(
        'grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4',
        className
      )}
    >
      {pokemons?.map((pokemon, index) => {
        const pokeNumb = index + 1
        return <Card key={`${pokeNumb}-${pokemon?.name}`} url={pokemon?.url} name={pokemon?.name} />
      })}
    </div>
  )
}

export default ListCard

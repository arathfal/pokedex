'use client'
import { useCallback, useEffect, useMemo, useState } from 'react'

import Link from 'next/link'

import usePokemons from '@/hooks/usePokemons'
import cn from '@/lib/cn'
import processPokemon from '@/lib/processPokemon'
import { PokemonDetailType } from '@/types/pokemon'

import Button from './Button'
import NextImage from './NextImage'

type CardProps = {
  url: string
  name: string
}

const Card = ({ url, name }: CardProps) => {
  const {
    comparison: { selected, setSelected }
  } = usePokemons()
  const [data, setData] = useState<PokemonDetailType>({} as PokemonDetailType)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${url}`)
      const pokemon = await result.json()
      setData(processPokemon(pokemon))
    }

    fetchData()
  }, [url, name])

  const isInclude = useMemo(() => {
    return selected?.some((val) => val?.id === data?.id)
  }, [selected, data])

  const handleOnClick = useCallback(() => {
    setSelected((prev) => {
      if (!isInclude) return [...prev, data]

      return prev?.filter((val) => val?.id !== data?.id)
    })
  }, [isInclude, data, setSelected])

  const isHasFullSelected = selected?.length === 2
  const isDisabled = isHasFullSelected && !isInclude

  return (
    <div
      className={cn(
        'relative rounded-md border-2 border-orange-200 bg-orange-200',
        isDisabled && 'border-slate-300 bg-slate-300',
        isInclude && 'border-red-400'
      )}
    >
      <span
        className={cn(
          'absolute left-1 top-1 inline-flex size-6 items-center justify-center rounded-full bg-red-500 text-sm',
          isDisabled && 'bg-slate-500'
        )}
      >
        {data?.id}
      </span>
      <Link href={`/pokemon/${name}`} as={`/pokemon/${name}`}>
        <div className="relative h-80">
          <NextImage
            src={data?.image}
            className={cn('object-contain', isDisabled && 'grayscale')}
            alt={name}
            sizes="100vw, 500px"
          />
        </div>
      </Link>
      <h5 className="p-2 text-center text-lg font-semibold capitalize text-slate-800">{name}</h5>
      <div className="p-2">
        <Button
          disabled={isDisabled}
          variant={isInclude ? 'red' : 'green'}
          onClick={handleOnClick}
          className="w-full"
        >
          {isInclude ? 'Remove' : 'Compare'}
        </Button>
      </div>
    </div>
  )
}

export default Card

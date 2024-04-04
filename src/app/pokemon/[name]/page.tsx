import Link from 'next/link'

import NextImage from '@/components/NextImage'
import getPokemon from '@/server/getPokemon'

type PokemonDetailProps = {
  params: {
    name: string
  }
  searchParams: Record<string, unknown>
}
export default async function PokemonDetail({ params }: PokemonDetailProps) {
  const pokemon = await getPokemon(params?.name)

  console.log(pokemon)

  return (
    <main className="p-10">
      <Link href="/" as="/" className="flex items-center gap-2">
        <span>&larr;</span>
        <span>Home</span>
      </Link>
      <div className="container mx-auto gap-8 px-5 py-16 md:flex">
        <div className="relative mb-8 h-[340px] w-full bg-orange-200 md:mb-0 md:w-5/12">
          <NextImage
            src={pokemon?.image}
            className="object-contain"
            alt={pokemon?.name}
            sizes="100vw, 500px"
          />
        </div>
        <div className="w-full md:w-7/12 ">
          <h1 className="mb-8 text-2xl capitalize">
            <strong>{pokemon?.name}</strong>
          </h1>
          <div className="grid grid-cols-2 gap-16 text-sm">
            <div className="flex flex-col gap-1">
              <h2 className="mb-2 text-lg">
                <strong>General Info:</strong>
              </h2>
              <div className="flex w-full">
                <p className="w-6/12 md:w-5/12">Height:</p>
                <p>{pokemon?.height} m</p>
              </div>
              <div className="flex w-full">
                <p className="w-6/12 md:w-5/12">Weight:</p>
                <p>{pokemon?.weight} kg</p>
              </div>
              <div className="flex w-full">
                <p className="w-6/12 md:w-5/12">Types:</p>
                <p>{pokemon?.types?.join(', ')}</p>
              </div>
              <div className="flex w-full">
                <p className="w-6/12 md:w-5/12">Abilities:</p>
                <p>{pokemon?.abilities?.join(', ')}</p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="mb-1 text-lg">
                <strong>Stats:</strong>
              </h2>
              <div className="flex w-full">
                <p className="w-6/12 md:w-5/12">Hp:</p>
                <p>{pokemon?.stats?.hp}</p>
              </div>
              <div className="flex w-full">
                <p className="w-6/12 md:w-5/12">Attack:</p>
                <p>{pokemon?.stats?.attack}</p>
              </div>
              <div className="flex w-full">
                <p className="w-6/12 md:w-5/12">Defense:</p>
                <p>{pokemon?.stats?.defense}</p>
              </div>
              <div className="flex w-full">
                <p className="w-6/12 md:w-5/12">Special Attack:</p>
                <p>{pokemon?.stats?.['special-attack']}</p>
              </div>
              <div className="flex w-full">
                <p className="w-6/12 md:w-5/12">Special Attack:</p>
                <p>{pokemon?.stats?.['special-defense']}</p>
              </div>
              <div className="flex w-full">
                <p className="w-6/12 md:w-5/12">Speed:</p>
                <p>{pokemon?.stats?.speed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

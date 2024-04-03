import ListCard from '@/components/ListCard'
import Pagination from '@/components/Pagination'
import SearchInput from '@/components/SearchInput'
import Sorting from '@/components/Sorting'
import getPokemons from '@/server/getPokemons'

type HomeProps = {
  params: Record<string, unknown>
  searchParams: {
    page: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const page = Number(searchParams?.page)
  const pokemons = await getPokemons(page)

  return (
    <main className="p-10">
      <h1 className="mb-10 text-center text-5xl">
        <strong>Pokedex</strong>
      </h1>
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-4">
          <SearchInput />
          <Sorting />
        </div>
        <Pagination
          page={page}
          totalCount={pokemons?.count}
          disabledPrev={!pokemons?.previous}
          disabledNext={!pokemons?.next}
        />
      </div>
      <ListCard list={pokemons?.results} className="mt-10" />
    </main>
  )
}

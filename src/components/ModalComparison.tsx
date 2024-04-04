'use client'
import usePokemons from '@/hooks/usePokemons'

import Modal from './Modal'
import NextImage from './NextImage'

type ModalComparisonProps = {
  show?: boolean
  onLeave?: VoidFunction
}
export default function ModalComparison({ show, onLeave }: ModalComparisonProps) {
  const {
    comparison: { selected }
  } = usePokemons()

  const data1 = selected?.[0]
  const data2 = selected?.[1]

  return (
    <Modal className="w-full p-4 md:w-[650px]" show={show} onLeave={onLeave}>
      <div className="grid grid-cols-3 items-center gap-x-8 gap-y-3 text-center">
        <div className="mb-3">
          <div className="responsive mx-auto mb-1 size-40 rounded-full bg-orange-200 p-2">
            <NextImage src={data1?.image} alt="Pikachu" sizes="100vw, 500px" />
          </div>
          <p className="capitalize">
            <strong>{data1?.name}</strong>
          </p>
        </div>
        <h5>
          <strong>VS</strong>
        </h5>
        <div className="mb-3">
          <div className="responsive mx-auto mb-1 size-40 rounded-full bg-orange-200 p-2">
            <NextImage src={data2?.image} alt="Pikachu" sizes="100vw, 500px" />
          </div>
          <p className="capitalize">
            <strong>{data2?.name}</strong>
          </p>
        </div>

        <p>
          <strong>{data1?.height} m</strong>
        </p>
        <h6 className="text-sm font-medium">Height</h6>
        <p>
          <strong>{data2?.height} m</strong>
        </p>

        <p>
          <strong>{data1?.weight}kg</strong>
        </p>
        <h6 className="text-sm font-medium">Weight</h6>
        <p>
          <strong>{data2?.weight} kg</strong>
        </p>

        <p>
          <strong>{data1?.types?.join(', ')}</strong>
        </p>
        <h6 className="text-sm font-medium">Types</h6>
        <p>
          <strong>{data2?.types?.join(', ')}</strong>
        </p>

        <p>
          <strong>{data1?.abilities?.join(', ')}</strong>
        </p>
        <h6 className="text-sm font-medium">Abilities</h6>
        <p>
          <strong>{data2?.abilities?.join(', ')}</strong>
        </p>

        <p>
          <strong>{data1?.stats?.hp}</strong>
        </p>
        <h6 className="text-sm font-medium">Hp</h6>
        <p>
          <strong>{data2?.stats?.hp}</strong>
        </p>

        <p>
          <strong>{data1?.stats?.attack}</strong>
        </p>
        <h6 className="text-sm font-medium">Attack</h6>
        <p>
          <strong>{data2?.stats?.attack}</strong>
        </p>

        <p>
          <strong>{data1?.stats?.defense}</strong>
        </p>
        <h6 className="text-sm font-medium">Defense</h6>
        <p>
          <strong>{data2?.stats?.defense}</strong>
        </p>

        <p>
          <strong>{data1?.stats?.['special-attack']}</strong>
        </p>
        <h6 className="text-sm font-medium">Special Attack</h6>
        <p>
          <strong>{data2?.stats?.['special-attack']}</strong>
        </p>

        <p>
          <strong>{data1?.stats?.['special-defense']}</strong>
        </p>
        <h6 className="text-sm font-medium">Special Defense</h6>
        <p>
          <strong>{data2?.stats?.['special-defense']}</strong>
        </p>

        <p>
          <strong>{data1?.stats?.speed}</strong>
        </p>
        <h6 className="text-sm font-medium">Speed</h6>
        <p>
          <strong>{data2?.stats?.speed}</strong>
        </p>
      </div>
    </Modal>
  )
}

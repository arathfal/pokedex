'use client'
import { useEffect, useState } from 'react'

import NextImage from './NextImage'

type CardProps = {
  url: string
  name: string
}

const Card = ({ url, name }: CardProps) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${url}`)
      const data = await result.json()
      setImageUrl(
        data?.sprites?.other?.['official-artwork']?.front_default ||
          data?.sprites?.other?.home?.front_default
      )
    }

    fetchData()
  }, [name, url])

  return (
    <div className="rounded-md border border-gray-200 bg-white">
      <div className="relative h-80">
        <NextImage src={imageUrl} className="object-contain" alt={name} sizes="100vw, 500px" />
      </div>
      <h5 className="p-2 text-lg font-semibold text-slate-800">{name}</h5>
    </div>
  )
}

export default Card

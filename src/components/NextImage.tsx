'use client'
import { ReactNode, useState } from 'react'

import Image, { ImageProps } from 'next/image'

import cn from '@/lib/cn'

import pokemon from '../../public/pikachu.png'

type NextImageProps = {
  caption?: string | ReactNode
} & ImageProps

export default function NextImage({ src, alt, className, ...props }: NextImageProps) {
  const [loaded, setLoaded] = useState(true)

  return (
    <figure
      className={cn(
        'relative flex h-full w-full items-center justify-center rounded-t-md bg-orange-200',
        loaded && 'animate-pulse bg-slate-700'
      )}
    >
      <Image
        className={cn(loaded && 'opacity-0', className)}
        src={src || pokemon}
        fill
        alt={alt}
        onLoad={() => setLoaded(false)}
        priority
        placeholder="blur"
        blurDataURL="/pikachu.png"
        {...props}
      />
    </figure>
  )
}

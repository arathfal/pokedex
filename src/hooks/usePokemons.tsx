'use client'
import { useContext } from 'react'

import store from '@/store'

export default function usePokemons() {
  return useContext(store)
}

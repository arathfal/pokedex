'use client'
import { useEffect, useState } from 'react'

import { createPortal } from 'react-dom'

import cn from '@/lib/cn'
import { CommonProps } from '@/types/common'

type ModalProps = CommonProps & {
  title?: string
  show?: boolean
  onLeave?: VoidFunction
  className?: string
}

export default function Modal({ title, show, onLeave, children, className }: ModalProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (show) {
      setContainer(document.body)
    } else {
      setContainer(null)
    }
    return () => setContainer(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  return container
    ? createPortal(
        <div className="fixed left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center px-8 transition-all duration-300">
          <div className="absolute h-full w-full bg-slate-950/70">
            <button className="h-full w-full cursor-default" onClick={onLeave}></button>
          </div>
          <div
            className={cn(
              'relative max-h-[calc(100vh-2.25rem)] max-w-full rounded-md bg-slate-50 text-slate-950 shadow-md shadow-slate-200',
              className
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="mb-6 text-2xl font-bold text-slate-950">{title}</h2>
              <button onClick={onLeave} className="text-lg font-bold">
                &#x2715;
              </button>
            </div>
            {children}
          </div>
        </div>,
        container
      )
    : null
}

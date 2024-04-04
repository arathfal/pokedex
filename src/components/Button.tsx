import { ButtonHTMLAttributes } from 'react'

import cn from '@/lib/cn'
import { CommonProps } from '@/types/common'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps & {
    variant?: 'green' | 'red' | 'light'
  }

export default function Button({
  variant = 'light',
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'h-10 w-auto rounded-md bg-slate-50 px-4 py-2 text-slate-950 transition-all hover:bg-slate-300',
        variant === 'green' && 'bg-green-600 text-slate-50 hover:bg-green-700 ',
        variant === 'red' && 'bg-red-500 text-slate-50 hover:bg-red-600',
        disabled && 'pointer-events-none bg-slate-500',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

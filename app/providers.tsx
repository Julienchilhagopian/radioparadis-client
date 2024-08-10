'use client'

import { NextUIProvider } from '@nextui-org/react'
import { PlayProvider } from './context/playContext';


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PlayProvider>
      <NextUIProvider>  
          {children}
      </NextUIProvider>
    </PlayProvider>
  )
}
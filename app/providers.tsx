'use client'

import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div>{children}</div>
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

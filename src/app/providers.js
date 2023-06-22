"use client"

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

export default function Provider({ children }) {
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => setMounted(true), [])
    
    return mounted ? (
        <ThemeProvider attribute="class">
        {children}
        </ThemeProvider>
    ) : <>{children}</>
}
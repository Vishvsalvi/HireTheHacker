"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

// Client component for conditional navbar rendering
export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLandingPage = pathname === "/" || pathname === "/features"

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLandingPage && <Navbar />}
        {children}
      </body>
    </html>
  )
}


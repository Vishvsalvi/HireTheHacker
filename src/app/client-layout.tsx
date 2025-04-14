"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Navbar from "@/components/navbar"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLandingPage = pathname === "/" || pathname === "/features"

  return (
    <>
      {isLandingPage && <Navbar />}
      {children}
    </>
  )
}


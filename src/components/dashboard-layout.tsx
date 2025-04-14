"use client"

import type React from "react"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { BarChart, FileText, Home, ScanEye, Settings, Users, LogOut, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar for mobile */}
      <div className={`fixed inset-0 z-40 flex md:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex flex-shrink-0 items-center px-4">
            <span className="text-xl font-bold text-blue-600">ResumeAI</span>
          </div>
          <div className="mt-5 h-0 flex-1 overflow-y-auto">
            <nav className="space-y-1 px-2">
            <SidebarLink href="/add-resume" icon={ScanEye} current={pathname === "/add-resume"}>
                New Screening
              </SidebarLink>
              <SidebarLink href="/dashboard" icon={Home} current={pathname === "/dashboard"}>
                Dashboard
              </SidebarLink>
              <SidebarLink href="/screenings" icon={FileText} current={pathname === "/screenings"}>
                Screenings
              </SidebarLink>
              <SidebarLink href="/analytics" icon={BarChart} current={pathname === "/analytics"}>
                Analytics
              </SidebarLink>
              <SidebarLink href="/settings" icon={Settings} current={pathname === "/settings"}>
                Settings
              </SidebarLink>
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div>
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-3">
                <p className="text-base font-medium text-gray-700">Jane Doe</p>
                <Link href="/auth" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow border-r border-gray-200 bg-white pt-5 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 mb-5">
            <span className="text-xl font-bold text-blue-600">ResumeAI</span>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-4 space-y-1">
            <SidebarLink href="/add-resume" icon={ScanEye} current={pathname === "/add-resume"}>
                New Screening
              </SidebarLink>
              <SidebarLink href="/dashboard" icon={Home} current={pathname === "/dashboard"}>
                Dashboard
              </SidebarLink>
              <SidebarLink href="/screenings" icon={FileText} current={pathname === "/screenings"}>
                Screenings
              </SidebarLink>
              <SidebarLink href="/settings" icon={Settings} current={pathname === "/settings"}>
                Settings
              </SidebarLink>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex items-center w-full">
              <div>
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-700">Jane Doe</p>
                <Link
                  href="/auth"
                  className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1 mt-1"
                >
                  <LogOut className="h-3 w-3" />
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 md:pl-64">
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">{children}</main>
      </div>
    </div>
  )
}

function SidebarLink({
  href,
  icon: Icon,
  current = false,
  children,
}: {
  href: string
  icon: any
  current?: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
        current ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <Icon
        className={`mr-3 h-5 w-5 flex-shrink-0 ${
          current ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500"
        }`}
      />
      {children}
    </Link>
  )
}


"use client"

import { Card, CardContent } from "@/components/ui/card"

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-gray-100">
      <Card className="w-80">
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid" />
            <p className="text-gray-500">Loading...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


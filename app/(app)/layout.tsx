"use client"

import { TopBar } from "@/components/top-bar"
import { AppProvider } from "@/lib/store"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <div className="flex h-screen overflow-hidden bg-background">
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <TopBar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </AppProvider>
  )
}

"use client"

import { Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="h-16 border-b bg-background flex items-center justify-between px-6">

      {/* Left — Search */}
      <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-md w-72">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Right — Actions */}
      <div className="flex items-center gap-2">

        {/* Notification Bell */}
        <Button variant="ghost" size="icon">
          <Bell className="w-4 h-4" />
        </Button>

        {/* User Avatar */}
        <Button variant="ghost" size="icon">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
        </Button>

      </div>
    </header>
  )
}

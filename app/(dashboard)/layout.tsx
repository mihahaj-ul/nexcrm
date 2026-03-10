import Sidebar from "@/components/layout/Sidebar"
import Navbar from "@/components/layout/Navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar — always visible on left */}
      <Sidebar />

      {/* Right side — Navbar + Page content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 bg-muted/30">
          {children}
        </main>
      </div>

    </div>
  )
}
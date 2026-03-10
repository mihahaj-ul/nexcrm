"use client"

import StatsCard from "@/components/shared/StatsCard"
import { stats, chartData, recentActivity, recentContacts } from "@/lib/data"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">

      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Welcome back to NexCRM 👋</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-3 gap-4">

        {/* Bar Chart */}
        <div className="col-span-2 bg-background rounded-lg border p-5">
          <h2 className="text-base font-semibold mb-4">Deals Closed Per Month</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="deals" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-background rounded-lg border p-5">
          <h2 className="text-base font-semibold mb-4">Recent Activity</h2>
          <div className="flex flex-col gap-4">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex flex-col gap-1">
                <p className="text-sm font-medium">{item.action}</p>
                <p className="text-xs text-muted-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Recent Contacts Table */}
      <div className="bg-background rounded-lg border p-5">
        <h2 className="text-base font-semibold mb-4">Recent Contacts</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-muted-foreground">
              <th className="text-left py-2 font-medium">Name</th>
              <th className="text-left py-2 font-medium">Email</th>
              <th className="text-left py-2 font-medium">Company</th>
              <th className="text-left py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentContacts.map((contact) => (
              <tr key={contact.id} className="border-b last:border-0">
                <td className="py-3 font-medium">{contact.name}</td>
                <td className="py-3 text-muted-foreground">{contact.email}</td>
                <td className="py-3 text-muted-foreground">{contact.company}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    contact.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : contact.status === "Lead"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700"
                  }`}>
                    {contact.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
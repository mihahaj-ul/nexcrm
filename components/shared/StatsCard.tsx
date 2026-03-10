interface StatsCardProps {
  label: string
  value: string
  change: string
}

export default function StatsCard({ label, value, change }: StatsCardProps) {
  return (
    <div className="bg-background rounded-lg border p-5 flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-xs text-muted-foreground">{change}</p>
    </div>
  )
}

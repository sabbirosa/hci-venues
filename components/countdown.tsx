"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface CountdownProps {
  targetDate: string
  className?: string
  compact?: boolean
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

function getTimeLeft(targetDate: string): TimeLeft {
  const [y, m, d] = targetDate.split("-").map(Number)
  const target = new Date(y, m - 1, d, 0, 0, 0, 0)
  const diff = target.getTime() - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }

  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    done: false,
  }
}

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hrs" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Sec" },
] as const

export function Countdown({
  targetDate,
  className,
  compact = false,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(targetDate))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [targetDate])

  const cellClass = cn(
    "border-border bg-muted/50 border text-center",
    compact ? "px-1 py-1" : "px-2 py-2",
  )
  const gridClass = cn(
    "grid grid-cols-4",
    compact ? "gap-1" : "gap-2",
    className,
  )

  if (timeLeft === null) {
    return (
      <div className={gridClass}>
        {units.map((u) => (
          <div key={u.key} className={cellClass}>
            <div className="font-mono text-sm font-medium tabular-nums">—</div>
            <div className="text-muted-foreground text-xs uppercase tracking-widest">
              {u.label}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (timeLeft.done) {
    return (
      <p className={cn("text-muted-foreground text-sm", className)}>
        Submission deadline has passed
      </p>
    )
  }

  return (
    <div className={gridClass} aria-live="polite">
      {units.map((u) => (
        <div key={u.key} className={cellClass}>
          <div className="font-mono text-sm font-medium tabular-nums">
            {String(timeLeft[u.key]).padStart(2, "0")}
          </div>
          <div className="text-muted-foreground text-xs uppercase tracking-widest">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  )
}

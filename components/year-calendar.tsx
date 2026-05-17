"use client"

import { useMemo } from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { legendItems } from "@/lib/calendar/category-colors"
import {
  buildCalendarMarkers,
  getCalendarYearRange,
  markersOnDay,
  type CalendarMarker,
} from "@/lib/calendar/markers"
import type { Venue } from "@/lib/venues/types"
import { cn } from "@/lib/utils"

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const

const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as const

function toIso(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
}

function todayIso(): string {
  const t = new Date()
  return toIso(t.getFullYear(), t.getMonth(), t.getDate())
}

function MonthGrid({
  year,
  month,
  markers,
  today,
}: {
  year: number
  month: number
  markers: CalendarMarker[]
  today: string
}) {
  const firstDow = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (number | null)[] = [
    ...Array.from({ length: firstDow }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  return (
    <div className="min-w-0">
      <p className="mb-2 text-center text-sm font-medium">{MONTHS[month]}</p>
      <div className="text-muted-foreground mb-1 grid grid-cols-7 text-center text-[10px] font-semibold uppercase tracking-widest">
        {DOW.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day, i) => {
          if (day === null) {
            return <span key={`e-${i}`} className="h-8" />
          }
          const iso = toIso(year, month, day)
          const dayMarkers = markersOnDay(markers, iso)
          const isToday = iso === today

          return (
            <div
              key={iso}
              className="flex h-8 flex-col items-center justify-start"
            >
              <span
                className={cn(
                  "flex size-6 items-center justify-center text-xs tabular-nums",
                  isToday && "bg-muted text-foreground font-medium",
                )}
              >
                {day}
              </span>
              <div className="mt-0.5 flex w-full max-w-6 flex-col gap-px px-0.5">
                {dayMarkers.slice(0, 4).map((m) => (
                  <span
                    key={`${iso}-${m.id}`}
                    className={cn(
                      "block w-full rounded-full",
                      m.kind === "conference" ? "h-1" : "h-0.5",
                    )}
                    style={{ backgroundColor: m.color }}
                    title={`${m.label} (${m.kind})`}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CalendarLegend() {
  return (
    <aside className="border-border w-full shrink-0 border-t pt-4 lg:w-52 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-4">
      <div className="sticky top-0 space-y-3">
        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">
          Legend
        </p>
        <ul className="space-y-2.5">
          {legendItems.map(({ label, color }) => (
            <li key={label} className="flex items-center gap-2 text-sm">
              {label === "Today" ? (
                <span className="bg-muted size-4 shrink-0" aria-hidden />
              ) : (
                <span
                  className="h-1 w-6 shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                  aria-hidden
                />
              )}
              <span className="text-muted-foreground leading-snug">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export function YearCalendar({
  venues,
  year,
  onYearChange,
}: {
  venues: Venue[]
  year: number
  onYearChange: (year: number) => void
}) {
  const { min, max } = useMemo(() => getCalendarYearRange(venues), [venues])
  const markers = useMemo(
    () => buildCalendarMarkers(venues, year),
    [venues, year],
  )
  const today = todayIso()

  const windowYears = useMemo(() => {
    const ys: number[] = []
    for (let y = year - 2; y <= year + 2; y++) {
      if (y >= min && y <= max) ys.push(y)
    }
    return ys
  }, [year, min, max])

  return (
    <div className="flex min-h-0 flex-col gap-6 lg:flex-row">
      <div className="min-w-0 flex-1 space-y-8">
      <div className="border-border flex items-center justify-center gap-2 border py-3">
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          disabled={year <= min}
          onClick={() => onYearChange(year - 1)}
          aria-label="Previous year"
        >
          <RiArrowLeftSLine className="size-5" />
        </Button>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {windowYears.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => onYearChange(y)}
              className={cn(
                "text-sm tabular-nums transition-colors",
                y === year
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {y}
            </button>
          ))}
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          disabled={year >= max}
          onClick={() => onYearChange(year + 1)}
          aria-label="Next year"
        >
          <RiArrowRightSLine className="size-5" />
        </Button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {MONTHS.map((_, month) => (
          <MonthGrid
            key={month}
            year={year}
            month={month}
            markers={markers}
            today={today}
          />
        ))}
      </div>
      </div>

      <CalendarLegend />
    </div>
  )
}

"use client"

import { useCallback, useMemo } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { ScrollArea } from "@/components/ui/scroll-area"
import { YearCalendar } from "@/components/year-calendar"
import { venues } from "@/data"
import { getCalendarYearRange } from "@/lib/calendar/markers"

export function CalendarView() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const { min, max } = useMemo(() => getCalendarYearRange(venues), [])

  const year = useMemo(() => {
    const raw = searchParams.get("year")
    const n = raw ? Number(raw) : new Date().getFullYear()
    if (!Number.isFinite(n)) return new Date().getFullYear()
    return Math.min(max, Math.max(min, n))
  }, [searchParams, min, max])

  const onYearChange = useCallback(
    (nextYear: number) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set("year", String(nextYear))
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [pathname, router, searchParams]
  )

  return (
    <ScrollArea className="h-full min-h-0">
      <div className="space-y-4 pr-3">
        <header>
          <h1 className="text-xl font-medium">Calendar</h1>
          <p className="text-muted-foreground">
            Submission deadlines and conference dates across all venues.
          </p>
        </header>
        <YearCalendar venues={venues} year={year} onYearChange={onYearChange} />
      </div>
    </ScrollArea>
  )
}

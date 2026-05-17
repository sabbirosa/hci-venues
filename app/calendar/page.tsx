import { Suspense } from "react"

import { CalendarView } from "@/components/calendar-view"

export default function CalendarPage() {
  return (
    <Suspense
      fallback={<p className="text-muted-foreground">Loading calendar…</p>}
    >
      <CalendarView />
    </Suspense>
  )
}

import { Suspense } from "react"

import { CalendarView } from "@/components/calendar-view"
import { CalendarViewSkeleton } from "@/components/skeletons/calendar-view-skeleton"

export default function CalendarPage() {
  return (
    <Suspense fallback={<CalendarViewSkeleton />}>
      <CalendarView />
    </Suspense>
  )
}

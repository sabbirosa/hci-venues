"use client"

import { cn } from "@/lib/utils"
import { NEARBY_DEADLINE_DAYS } from "@/lib/venues/dates"

export function VenueDashboardHeader({
  venueCount,
  upcomingNearbyCount,
  deadlinesReady = true,
  compact = false,
  className,
}: {
  venueCount: number
  upcomingNearbyCount: number
  /** False until client-only deadline math has run (avoids SSR mismatch). */
  deadlinesReady?: boolean
  compact?: boolean
  className?: string
}) {
  return (
    <header className={cn("space-y-1", className)}>
      <h1 className="text-xl font-medium">HCI Venues Tracker</h1>
      {!compact && (
        <>
          <p className="text-base text-muted-foreground">
            Rankings (CORE), Scopus indexing, categories, and countdowns to
            paper submission deadlines.
          </p>
        </>
      )}
      <p
        className={cn(
          "text-muted-foreground text-primary",
          compact && "text-sm",
        )}
        suppressHydrationWarning
      >
        {venueCount} venues
        {deadlinesReady ? (
          <>
            {" "}
            and {upcomingNearbyCount} with upcoming deadlines in the next{" "}
            {NEARBY_DEADLINE_DAYS} days
          </>
        ) : null}
      </p>
    </header>
  )
}

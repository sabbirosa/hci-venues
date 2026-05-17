import { isDeadlineWithinDays, NEARBY_DEADLINE_DAYS } from "@/lib/venues/dates"
import {
  getNextEdition,
  getSubmissionDeadline,
} from "@/lib/venues/get-next-edition"
import type { CoreRank, Venue } from "@/lib/venues/types"

/** @deprecated Use {@link NEARBY_DEADLINE_DAYS} from `./dates`. */
export const FEATURED_NEARBY_DAYS = NEARBY_DEADLINE_DAYS

/**
 * Venue list sort precedence (top → bottom).
 *
 * 1. **Featured + nearby deadline** — `featured: true`, open submission, deadline
 *    within {@link FEATURED_NEARBY_DAYS} days (sort-only; not on cards).
 * 2. **Deadline state** — open → passed → TBA → none
 * 3. **Date** — soonest relevant date in that state (nearest deadline first)
 * 4. **CORE rank** — A* → A → B → C → Regional → Unranked → (none); tie-break only
 * 5. **Acronym**
 */
export const CORE_RANK_PRECEDENCE: Record<CoreRank, number> = {
  "A*": 0,
  A: 1,
  B: 2,
  C: 3,
  Regional: 4,
  Unranked: 5,
}

const NO_CORE_RANK = 6

export function getCoreRankPrecedence(rank: CoreRank | null): number {
  return rank === null ? NO_CORE_RANK : CORE_RANK_PRECEDENCE[rank]
}

export function hasFeaturedNearbyDeadline(
  venue: Venue,
  now: Date = new Date(),
  withinDays: number = NEARBY_DEADLINE_DAYS,
): boolean {
  if (venue.featured !== true) return false
  const next = getNextEdition(venue, now)
  return (
    next.status === "upcoming" &&
    isDeadlineWithinDays(next.countdownDate, withinDays, now)
  )
}

function featuredSortTier(venue: Venue, now: Date): number {
  return hasFeaturedNearbyDeadline(venue, now) ? 0 : 1
}

function deadlineSortParts(
  venue: Venue,
  now: Date,
): { bucket: number; date: string } {
  const next = getNextEdition(venue, now)
  switch (next.status) {
    case "rolling-open":
      return { bucket: 0, date: "0000-01-01" }
    case "upcoming":
      return { bucket: 0, date: next.countdownDate }
    case "deadline-passed": {
      const sub = getSubmissionDeadline(next.edition)
      return {
        bucket: 1,
        date: sub?.date ?? next.edition.startDate ?? `${next.edition.year}-12-31`,
      }
    }
    case "deadline-tba":
      return {
        bucket: 2,
        date: next.edition.startDate ?? `${next.edition.year}-12-31`,
      }
    case "passed-awaiting":
      return { bucket: 9, date: "9999-12-31" }
  }
}

/** Lexicographic sort key (use with `localeCompare`). */
export function getVenueSortKey(venue: Venue, now: Date = new Date()): string {
  const featured = featuredSortTier(venue, now)
  const rank = String(getCoreRankPrecedence(venue.coreRank)).padStart(2, "0")
  const { bucket, date } = deadlineSortParts(venue, now)
  const bucketStr = String(bucket).padStart(2, "0")
  return `${featured}-${bucketStr}-${date}-${rank}-${venue.acronym.toLowerCase()}`
}

export function compareVenues(
  a: Venue,
  b: Venue,
  now: Date = new Date(),
): number {
  return getVenueSortKey(a, now).localeCompare(getVenueSortKey(b, now))
}

export function sortVenues(venues: Venue[], now: Date = new Date()): Venue[] {
  return [...venues].sort((a, b) => compareVenues(a, b, now))
}

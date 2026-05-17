import { colorForCategories, DEADLINE_COLOR } from "@/lib/calendar/category-colors"
import { isEditionRolling } from "@/lib/venues/get-next-edition"
import type { ConferenceEdition, Venue, VenueCategory } from "@/lib/venues/types"

export type CalendarMarkerKind =
  | "abstract-deadline"
  | "paper-deadline"
  | "conference"

export interface CalendarMarker {
  id: string
  venueId: string
  label: string
  kind: CalendarMarkerKind
  start: string
  end: string
  color: string
  categories: VenueCategory[]
}

function yearOf(iso: string): number {
  return Number(iso.slice(0, 4))
}

function touchesYear(start: string, end: string, year: number): boolean {
  return yearOf(start) <= year && yearOf(end) >= year
}

function editionLabel(acronym: string, edition: ConferenceEdition): string {
  return `${acronym} ${edition.year}`
}

export function buildCalendarMarkers(
  venues: Venue[],
  year: number,
): CalendarMarker[] {
  const markers: CalendarMarker[] = []

  for (const venue of venues) {
    for (const edition of venue.editions ?? []) {
      if (!edition.announced) continue

      const color = colorForCategories(venue.categories)
      const base = `${venue.id}-${edition.editionId ?? edition.year}`
      const label = editionLabel(venue.acronym, edition)

      if (
        !isEditionRolling(venue, edition) &&
        edition.abstractDeadline &&
        yearOf(edition.abstractDeadline) === year
      ) {
        markers.push({
          id: `${base}-abstract`,
          venueId: venue.id,
          label,
          kind: "abstract-deadline",
          start: edition.abstractDeadline,
          end: edition.abstractDeadline,
          color: DEADLINE_COLOR,
          categories: venue.categories,
        })
      }

      if (
        !isEditionRolling(venue, edition) &&
        edition.paperDeadline &&
        yearOf(edition.paperDeadline) === year
      ) {
        markers.push({
          id: `${base}-paper`,
          venueId: venue.id,
          label,
          kind: "paper-deadline",
          start: edition.paperDeadline,
          end: edition.paperDeadline,
          color: DEADLINE_COLOR,
          categories: venue.categories,
        })
      }

      if (!edition.startDate) continue

      const confEnd = edition.endDate ?? edition.startDate
      if (touchesYear(edition.startDate, confEnd, year)) {
        markers.push({
          id: `${base}-conf`,
          venueId: venue.id,
          label,
          kind: "conference",
          start: edition.startDate,
          end: confEnd,
          color,
          categories: venue.categories,
        })
      }
    }
  }

  return markers
}

export function getCalendarYearRange(venues: Venue[]): {
  min: number
  max: number
} {
  const current = new Date().getFullYear()
  let min = current
  let max = current + 2

  for (const venue of venues) {
    for (const edition of venue.editions ?? []) {
      const years = [
        edition.year,
        edition.startDate ? Number(edition.startDate.slice(0, 4)) : null,
        edition.endDate ? Number(edition.endDate.slice(0, 4)) : null,
        edition.paperDeadline ? Number(edition.paperDeadline.slice(0, 4)) : null,
        edition.abstractDeadline
          ? Number(edition.abstractDeadline.slice(0, 4))
          : null,
      ].filter((y): y is number => y !== null)

      for (const y of years) {
        if (y < min) min = y
        if (y > max) max = y
      }
    }
  }

  return { min, max }
}

export function isoInRange(iso: string, start: string, end: string): boolean {
  return iso >= start && iso <= end
}

export function markersOnDay(
  markers: CalendarMarker[],
  iso: string,
): CalendarMarker[] {
  return markers.filter((m) => isoInRange(iso, m.start, m.end))
}

import { parseDay } from "@/lib/venues/dates"
import type { ConferenceEdition, Venue } from "@/lib/venues/types"

export interface Proceeding {
  venue: Venue
  edition: ConferenceEdition
  title: string
  sortDate: string
}

function latestDeadlineIso(edition: ConferenceEdition): string | null {
  const dates = [edition.abstractDeadline, edition.paperDeadline].filter(
    Boolean,
  ) as string[]
  if (dates.length === 0) return null
  return dates.sort().at(-1)!
}

export function getAllProceedings(venues: Venue[]): Proceeding[] {
  const items: Proceeding[] = []

  for (const venue of venues) {
    for (const edition of venue.editions ?? []) {
      if (!edition.announced) continue
      items.push({
        venue,
        edition,
        title: `${venue.fullName} (${venue.acronym}) ${edition.year}`,
        sortDate: latestDeadlineIso(edition) ?? edition.startDate,
      })
    }
  }

  return items.sort((a, b) => b.sortDate.localeCompare(a.sortDate))
}

export function getPastProceedings(
  venues: Venue[],
  now: Date = new Date(),
): Proceeding[] {
  return getAllProceedings(venues).filter(({ edition }) => {
    const abstract = edition.abstractDeadline
      ? parseDay(edition.abstractDeadline)
      : null
    const paper = edition.paperDeadline
      ? parseDay(edition.paperDeadline)
      : null
    const conferenceEnd = parseDay(edition.endDate ?? edition.startDate)

    if (abstract && abstract > now) return false
    if (paper && paper > now) return false
    if (!abstract && !paper) return conferenceEnd <= now
    return true
  })
}

export function formatProceedingWhen(edition: ConferenceEdition): string {
  if (edition.dateLabel) {
    return edition.location
      ? `${edition.dateLabel}. ${edition.location}.`
      : `${edition.dateLabel}.`
  }
  const start = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(edition.startDate + "T12:00:00"))
  const end = edition.endDate
    ? new Intl.DateTimeFormat("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(edition.endDate + "T12:00:00"))
    : null
  const range = end && end !== start ? `${start} – ${end}` : start
  return edition.location ? `${range}. ${edition.location}.` : `${range}.`
}

export function formatDeadlineStamp(iso: string | undefined): string {
  if (!iso) return "—"
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso + "T12:00:00"))
}

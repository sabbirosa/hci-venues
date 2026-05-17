import {
  formatShortDate,
  isDeadlineWithinDays,
  NEARBY_DEADLINE_DAYS,
  parseDay,
} from "@/lib/venues/dates"
import type { ConferenceEdition, NextEditionState, Venue } from "@/lib/venues/types"

function editionLabel(acronym: string, edition: ConferenceEdition): string {
  return `${acronym} ${edition.year}`
}

function isConferenceUpcoming(edition: ConferenceEdition, now: Date): boolean {
  return parseDay(edition.startDate) > now
}

export function hasUpcomingDeadlineNearby(
  venue: Venue,
  now: Date = new Date(),
  withinDays: number = NEARBY_DEADLINE_DAYS,
): boolean {
  const next = getNextEdition(venue, now)
  return (
    next.status === "upcoming" &&
    isDeadlineWithinDays(next.countdownDate, withinDays, now)
  )
}

export function countVenuesWithDeadlineNearby(
  venues: Venue[],
  now: Date = new Date(),
  withinDays: number = NEARBY_DEADLINE_DAYS,
): number {
  return venues.filter((v) => hasUpcomingDeadlineNearby(v, now, withinDays)).length
}

export function getSubmissionDeadline(
  edition: ConferenceEdition,
): { date: string; kind: "abstract" | "paper" } | null {
  if (edition.abstractDeadline) {
    return { date: edition.abstractDeadline, kind: "abstract" }
  }
  if (edition.paperDeadline) {
    return { date: edition.paperDeadline, kind: "paper" }
  }
  return null
}

export function getNextEdition(
  venue: Venue,
  now: Date = new Date(),
): NextEditionState {
  const announced = (venue.editions ?? []).filter((e) => e.announced)

  const upcomingConference = [...announced]
    .filter((e) => isConferenceUpcoming(e, now))
    .sort((a, b) => a.startDate.localeCompare(b.startDate))[0]

  if (!upcomingConference) {
    const past = [...announced]
      .filter((e) => parseDay(e.startDate) <= now)
      .sort((a, b) => b.startDate.localeCompare(a.startDate))

    const previous = past[0] ?? null
    const lastYear = previous?.year ?? null
    const nextYear = lastYear !== null ? lastYear + 1 : null

    const message =
      previous && nextYear
        ? `${editionLabel(venue.acronym, previous)} has passed · ${venue.acronym} ${nextYear} not yet announced`
        : previous
          ? `${editionLabel(venue.acronym, previous)} has passed · next edition not yet announced`
          : "Next edition not yet announced"

    return {
      status: "passed-awaiting",
      label: previous ? editionLabel(venue.acronym, previous) : venue.acronym,
      previous,
      message,
    }
  }

  const label = editionLabel(venue.acronym, upcomingConference)
  const submission = getSubmissionDeadline(upcomingConference)

  if (submission && parseDay(submission.date) > now) {
    return {
      status: "upcoming",
      label,
      edition: upcomingConference,
      countdownDate: submission.date,
      countdownKind: submission.kind,
    }
  }

  if (submission) {
    return {
      status: "deadline-passed",
      label,
      edition: upcomingConference,
      message: `${submission.kind === "abstract" ? "Abstract" : "Paper"} deadline passed (${formatShortDate(submission.date)})`,
    }
  }

  return {
    status: "deadline-tba",
    label,
    edition: upcomingConference,
    message: "Submission deadline not yet announced",
  }
}

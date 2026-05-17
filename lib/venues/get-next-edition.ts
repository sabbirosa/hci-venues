import {
  isDeadlineWithinDays,
  NEARBY_DEADLINE_DAYS,
  parseDay,
} from "@/lib/venues/dates"
import type {
  ConferenceEdition,
  NextEditionState,
  Venue,
} from "@/lib/venues/types"

function editionLabel(acronym: string, edition: ConferenceEdition): string {
  return `${acronym} ${edition.year}`
}

function compareByStartDate(
  a: ConferenceEdition,
  b: ConferenceEdition
): number {
  if (!a.startDate && !b.startDate) return a.year - b.year
  if (!a.startDate) return 1
  if (!b.startDate) return -1
  return a.startDate.localeCompare(b.startDate)
}

function isConferenceUpcoming(edition: ConferenceEdition, now: Date): boolean {
  if (!edition.startDate) return false
  return parseDay(edition.startDate) > now
}

function isConferencePast(edition: ConferenceEdition, now: Date): boolean {
  if (!edition.startDate) return false
  return parseDay(edition.startDate) <= now
}

function getUpcomingConferenceEdition(
  announced: ConferenceEdition[],
  now: Date
): ConferenceEdition | undefined {
  return [...announced]
    .filter((e) => isConferenceUpcoming(e, now))
    .sort(compareByStartDate)[0]
}

function getPreviousConferenceEdition(
  announced: ConferenceEdition[],
  now: Date
): ConferenceEdition | null {
  return (
    [...announced]
      .filter((e) => isConferencePast(e, now))
      .sort((a, b) => compareByStartDate(b, a))[0] ?? null
  )
}

function getNextUnannouncedEdition(venue: Venue): ConferenceEdition | null {
  return (
    (venue.editions ?? [])
      .filter((e) => !e.announced)
      .sort((a, b) => a.year - b.year)[0] ?? null
  )
}

/** Soonest open submission deadline across all editions (includes unannounced). */
function getEditionWithOpenSubmission(
  editions: ConferenceEdition[],
  now: Date,
): ConferenceEdition | undefined {
  const open = editions
    .map((edition) => ({ edition, sub: getSubmissionDeadline(edition) }))
    .filter(
      (
        x,
      ): x is {
        edition: ConferenceEdition
        sub: { date: string; kind: "abstract" | "paper" }
      } => x.sub !== null && parseDay(x.sub.date) > now,
    )
    .sort((a, b) => a.sub.date.localeCompare(b.sub.date))

  return open[0]?.edition
}

function buildPassedScheduleMessage(
  venue: Venue,
  previous: ConferenceEdition
): string {
  const placeholder = getNextUnannouncedEdition(venue)
  if (placeholder) {
    return `${editionLabel(venue.acronym, previous)} has passed · ${venue.acronym} ${placeholder.year} not yet announced`
  }
  return `${editionLabel(venue.acronym, previous)} has passed · next edition not yet announced`
}

/** Abstract deadline if set, otherwise paper — same rule as {@link getSubmissionDeadline}. */
function hasSubmissionWindowClosed(
  edition: ConferenceEdition,
  now: Date
): boolean {
  const submission = getSubmissionDeadline(edition)
  return submission !== null && parseDay(submission.date) <= now
}

export function isEditionRolling(
  venue: Venue,
  edition: ConferenceEdition
): boolean {
  return (
    venue.rollingSubmissions === true || edition.rollingSubmissions === true
  )
}

export function usesRollingSubmissions(venue: Venue): boolean {
  if (venue.rollingSubmissions === true) return true
  return (venue.editions ?? []).some((e) => e.rollingSubmissions === true)
}

export function getRollingSubmissionsUrl(venue: Venue): string | undefined {
  if (venue.rollingSubmissionsUrl) return venue.rollingSubmissionsUrl
  const rollingEditions = (venue.editions ?? []).filter(
    (e) => e.rollingSubmissions && e.rollingSubmissionsUrl
  )
  return rollingEditions.sort((a, b) => b.year - a.year)[0]
    ?.rollingSubmissionsUrl
}

/** @deprecated Use {@link usesRollingSubmissions}. */
export function isRollingSubmissionsVenue(venue: Venue): boolean {
  return usesRollingSubmissions(venue)
}

export function hasUpcomingDeadlineNearby(
  venue: Venue,
  now: Date = new Date(),
  withinDays: number = NEARBY_DEADLINE_DAYS
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
  withinDays: number = NEARBY_DEADLINE_DAYS
): number {
  return venues.filter((v) => hasUpcomingDeadlineNearby(v, now, withinDays))
    .length
}

/**
 * Which deadline the venue list shows: abstract first if present, otherwise paper.
 * Editions may have one or both in data; only one drives the home-page countdown.
 */
export function getSubmissionDeadline(
  edition: ConferenceEdition
): { date: string; kind: "abstract" | "paper" } | null {
  if (edition.abstractDeadline) {
    return { date: edition.abstractDeadline, kind: "abstract" }
  }
  if (edition.paperDeadline) {
    return { date: edition.paperDeadline, kind: "paper" }
  }
  return null
}

export function submissionDeadlineHeading(kind: "abstract" | "paper"): string {
  return kind === "abstract" ? "Abstract deadline" : "Paper deadline"
}

function getRollingOpenState(
  venue: Venue,
  announced: ConferenceEdition[],
  now: Date
): NextEditionState {
  const upcomingConference = getUpcomingConferenceEdition(announced, now)

  if (upcomingConference) {
    return {
      status: "rolling-open",
      label: editionLabel(venue.acronym, upcomingConference),
      edition: upcomingConference,
      conferenceUpcoming: true,
      message: "Open year-round",
      subtitle: "Rolling submissions",
    }
  }

  const previous = getPreviousConferenceEdition(announced, now)
  const scheduleMessage = previous
    ? buildPassedScheduleMessage(venue, previous)
    : undefined

  return {
    status: "rolling-open",
    label: previous ? editionLabel(venue.acronym, previous) : venue.acronym,
    edition: previous,
    conferenceUpcoming: false,
    message: "Rolling submissions",
    subtitle: "Open year-round",
    scheduleMessage,
  }
}

export function getNextEdition(
  venue: Venue,
  now: Date = new Date()
): NextEditionState {
  const allEditions = venue.editions ?? []
  const announced = allEditions.filter((e) => e.announced)

  if (usesRollingSubmissions(venue)) {
    return getRollingOpenState(venue, announced, now)
  }

  const upcomingConference = getUpcomingConferenceEdition(announced, now)
  const openSubmissionEdition = getEditionWithOpenSubmission(allEditions, now)
  const submissionEdition = openSubmissionEdition ?? upcomingConference

  if (!submissionEdition) {
    const previous = getPreviousConferenceEdition(announced, now)

    const message = previous
      ? buildPassedScheduleMessage(venue, previous)
      : "Next edition not yet announced"

    return {
      status: "passed-awaiting",
      label: previous ? editionLabel(venue.acronym, previous) : venue.acronym,
      previous,
      message,
    }
  }

  const conferenceEdition =
    upcomingConference &&
    upcomingConference.year !== submissionEdition.year
      ? upcomingConference
      : undefined

  const label = editionLabel(venue.acronym, submissionEdition)
  const submission = getSubmissionDeadline(submissionEdition)

  if (submission && parseDay(submission.date) > now) {
    return {
      status: "upcoming",
      label,
      edition: submissionEdition,
      conferenceEdition,
      countdownDate: submission.date,
      countdownKind: submission.kind,
    }
  }

  if (hasSubmissionWindowClosed(submissionEdition, now)) {
    return {
      status: "deadline-passed",
      label,
      edition: submissionEdition,
      conferenceEdition,
      message: buildPassedScheduleMessage(venue, submissionEdition),
    }
  }

  return {
    status: "deadline-tba",
    label,
    edition: submissionEdition,
    conferenceEdition,
    message: "Submission deadline not yet announced",
  }
}

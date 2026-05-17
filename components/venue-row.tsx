"use client"

import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import { CoreRankBadge } from "@/components/core-rank-badge"
import { Countdown } from "@/components/countdown"
import { ExternalLink } from "@/components/external-link"
import { ScopusBadge } from "@/components/scopus-badge"
import { cn } from "@/lib/utils"
import { formatDateRange, formatShortDate } from "@/lib/venues/dates"
import { getVenueOfficialSiteHref } from "@/lib/venues/edition-links"
import {
  getNextEdition,
  submissionDeadlineHeading,
} from "@/lib/venues/get-next-edition"
import type { Venue } from "@/lib/venues/types"

function Tag({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-block bg-muted px-1.5 py-0.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase",
        className
      )}
    >
      {children}
    </span>
  )
}

function ConferenceTitle({
  label,
  href,
}: {
  label: string
  href?: string
}) {
  if (!href) {
    return <p className="font-medium">{label}</p>
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
    >
      {label}
      <RiArrowRightUpLine className="size-4 font-thin" />
    </Link>
  )
}

export function VenueRow({ venue }: { venue: Venue }) {
  const next = getNextEdition(venue)
  const activeEdition =
    next.status === "upcoming" ||
    next.status === "deadline-passed" ||
    next.status === "deadline-tba"
      ? next.edition
      : null
  const officialSiteHref = getVenueOfficialSiteHref(venue, activeEdition)

  return (
    <article className="flex flex-col gap-4 p-4 sm:flex-row sm:gap-6">
      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-base font-medium">{venue.acronym}</h2>
          {venue.coreRank && <CoreRankBadge rank={venue.coreRank} />}
          {venue.scopusIndexed && <ScopusBadge />}
        </div>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Publisher:</span>{" "}
          {venue.publisher}
        </p>
        <p className="leading-snug text-pretty text-muted-foreground">
          {venue.fullName}
        </p>
        <div className="flex flex-wrap gap-1">
          {venue.categories.map((cat) => (
            <Tag key={cat} className="bg-secondary text-secondary-foreground">
              {cat}
            </Tag>
          ))}
        </div>
        {officialSiteHref && (
          <ExternalLink href={officialSiteHref} className="inline-block">
            Official site
          </ExternalLink>
        )}
      </div>

      <div className="w-full shrink-0 space-y-3 sm:w-60">
        {(next.status === "upcoming" ||
          next.status === "deadline-passed" ||
          next.status === "deadline-tba") && (
          <>
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                {next.status === "upcoming"
                  ? submissionDeadlineHeading(next.countdownKind)
                  : "Submission deadline"}
              </p>
              {next.status === "upcoming" && (
                <>
                  <p className="font-medium">
                    {formatShortDate(next.countdownDate)}
                  </p>
                  <p className="text-sm text-muted-foreground">{next.label}</p>
                  <Countdown compact targetDate={next.countdownDate} />
                </>
              )}
              {(next.status === "deadline-passed" ||
                next.status === "deadline-tba") && (
                <p className="text-sm leading-snug">{next.message}</p>
              )}
            </div>

            <div className="border-t border-border pt-2">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Conference
              </p>
              <ConferenceTitle
                label={next.label}
                href={next.edition.website}
              />
              {next.edition.location && (
                <p className="truncate text-sm text-muted-foreground">
                  {next.edition.location}
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                {formatDateRange(next.edition.startDate, next.edition.endDate)}
              </p>
            </div>
          </>
        )}

        {next.status === "passed-awaiting" && (
          <div className="bg-muted/50 p-2">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Schedule
            </p>
            <p className="text-sm leading-snug">{next.message}</p>
          </div>
        )}
      </div>
    </article>
  )
}

"use client"

import { CoreRankBadge } from "@/components/core-rank-badge"
import { ScopusBadge } from "@/components/scopus-badge"
import { Countdown } from "@/components/countdown"
import { cn } from "@/lib/utils"
import { formatDateRange, formatShortDate } from "@/lib/venues/dates"
import { getNextEdition } from "@/lib/venues/get-next-edition"
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

export function VenueRow({ venue }: { venue: Venue }) {
  const next = getNextEdition(venue)

  return (
    <article className="flex gap-6 p-4">
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
        <p className="text-pretty leading-snug text-muted-foreground">
          {venue.fullName}
        </p>
        <div className="flex flex-wrap gap-1">
          {venue.categories.map((cat) => (
            <Tag key={cat} className="bg-secondary text-secondary-foreground">
              {cat}
            </Tag>
          ))}
        </div>
        {venue.website && (
          <a
            href={venue.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm tracking-widest text-primary uppercase hover:underline"
          >
            Official site →
          </a>
        )}
      </div>

      <div className="w-60 shrink-0 space-y-3">
        {(next.status === "upcoming" ||
          next.status === "deadline-passed" ||
          next.status === "deadline-tba") && (
          <>
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Submission deadline
              </p>
              {next.status === "upcoming" && (
                <>
                  <p className="font-medium">
                    {formatShortDate(next.countdownDate)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {next.label} ·{" "}
                    {next.countdownKind === "abstract"
                      ? "abstract due"
                      : "paper due"}
                  </p>
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
              <p className="font-medium">{next.label}</p>
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

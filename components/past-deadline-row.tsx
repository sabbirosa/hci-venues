import { RiGlobalLine } from "@remixicon/react"

import {
  formatDeadlineStamp,
  formatProceedingWhen,
  type Proceeding,
} from "@/lib/venues/proceedings"
import { cn } from "@/lib/utils"

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
        "bg-primary/10 text-primary inline-block px-2 py-0.5 text-xs font-medium",
        className,
      )}
    >
      {children}
    </span>
  )
}

export function PastDeadlineRow({ proceeding }: { proceeding: Proceeding }) {
  const { venue, edition } = proceeding
  const site = edition.website ?? venue.website

  return (
    <article className="flex flex-col gap-4 py-5 sm:flex-row sm:gap-8">
      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex flex-wrap items-start gap-2">
          <h2 className="text-base font-medium leading-snug">
            {proceeding.title}
          </h2>
          {site && (
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary mt-0.5 shrink-0"
              aria-label="Official site"
            >
              <RiGlobalLine className="size-4" />
            </a>
          )}
        </div>
        <p className="text-muted-foreground text-sm">
          {formatProceedingWhen(edition)}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {venue.categories.map((cat) => (
            <Tag key={cat}>{cat.toLowerCase()}</Tag>
          ))}
        </div>
      </div>

      <div className="text-muted-foreground w-full shrink-0 space-y-2 text-sm sm:w-72">
        <p>
          <span className="text-foreground font-medium">
            Abstract deadline:{" "}
          </span>
          {formatDeadlineStamp(edition.abstractDeadline)}
        </p>
        <p>
          <span className="text-foreground font-medium">Deadline: </span>
          {formatDeadlineStamp(edition.paperDeadline)}
        </p>
      </div>
    </article>
  )
}

import { cn } from "@/lib/utils"
import { getEditionLinks } from "@/lib/venues/edition-links"
import {
  formatDeadlineStamp,
  formatProceedingWhen,
  type Proceeding,
} from "@/lib/venues/proceedings"

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
        "inline-block bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary",
        className
      )}
    >
      {children}
    </span>
  )
}

const linkClassName =
  "text-sm tracking-widest text-primary uppercase hover:underline"

export function PastDeadlineRow({ proceeding }: { proceeding: Proceeding }) {
  const { venue, edition } = proceeding
  const links = getEditionLinks(venue, edition)

  return (
    <article className="flex flex-col gap-4 py-5 sm:flex-row sm:gap-8">
      <div className="min-w-0 flex-1 space-y-2">
        <h2 className="text-base leading-snug font-medium">
          {proceeding.title}
        </h2>
        <p className="text-sm text-muted-foreground">
          {formatProceedingWhen(edition)}
        </p>
        {links.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                {label} →
              </a>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-1.5">
          {venue.categories.map((cat) => (
            <Tag key={cat}>{cat.toLowerCase()}</Tag>
          ))}
        </div>
      </div>

      <div className="w-full shrink-0 space-y-2 text-sm text-muted-foreground sm:w-72">
        <p>
          <span className="font-medium text-foreground">
            Abstract deadline:{" "}
          </span>
          {formatDeadlineStamp(edition.abstractDeadline)}
        </p>
        <p>
          <span className="font-medium text-foreground">Paper deadline: </span>
          {formatDeadlineStamp(edition.paperDeadline)}
        </p>
      </div>
    </article>
  )
}

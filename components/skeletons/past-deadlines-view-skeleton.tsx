import { PastDeadlineRowSkeleton } from "@/components/skeletons/past-deadline-row-skeleton"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"

export function PastDeadlinesViewSkeleton() {
  return (
    <ScrollArea
      className="h-full min-h-0"
      aria-busy
      aria-label="Loading past deadlines"
    >
      <div className="space-y-6 pr-3">
        <header className="space-y-2">
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-4 w-full max-w-xl" />
        </header>

        <div className="max-w-md space-y-2">
          <Skeleton className="h-3 w-14" />
          <Skeleton className="h-10 w-full" />
        </div>

        <Skeleton className="h-4 w-32" />

        <div className="divide-y divide-border border-t border-border">
          {Array.from({ length: 8 }).map((_, i) => (
            <PastDeadlineRowSkeleton key={i} />
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}

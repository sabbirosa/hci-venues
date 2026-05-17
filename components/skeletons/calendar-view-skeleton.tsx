import { MonthGridSkeleton } from "@/components/skeletons/month-grid-skeleton"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"

export function CalendarViewSkeleton() {
  return (
    <ScrollArea
      className="h-full min-h-0"
      aria-busy
      aria-label="Loading calendar"
    >
      <div className="space-y-4 pr-3">
        <header className="space-y-2">
          <Skeleton className="h-7 w-28" />
          <Skeleton className="h-4 w-full max-w-lg" />
        </header>

        <div className="flex min-h-0 flex-col gap-6 lg:flex-row">
          <div className="min-w-0 flex-1 space-y-8">
            <div className="flex items-center justify-center gap-2 border border-border py-3">
              <Skeleton className="size-9" />
              <div className="flex gap-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-10" />
                ))}
              </div>
              <Skeleton className="size-9" />
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <MonthGridSkeleton key={i} />
              ))}
            </div>
          </div>

          <aside className="w-full shrink-0 border-t border-border pt-4 lg:w-52 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-4">
            <Skeleton className="mb-3 h-3 w-14" />
            <ul className="space-y-2.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Skeleton className="size-4 shrink-0" />
                  <Skeleton className="h-4 w-28" />
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </ScrollArea>
  )
}

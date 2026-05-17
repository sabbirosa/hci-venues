import { VenueRowSkeleton } from "@/components/skeletons/venue-row-skeleton"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"

function FilterPanelSkeleton() {
  return (
    <div className="space-y-4 border border-border p-4">
      <div className="space-y-2">
        <Skeleton className="h-3 w-12" />
        <Skeleton className="h-10 w-full" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-9 w-full" />
        </div>
      ))}
      <div className="space-y-2 border-t border-border pt-4">
        <Skeleton className="h-3 w-14" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  )
}

function HeaderSkeleton({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-2">
      <Skeleton className="h-7 w-52" />
      {!compact && (
        <>
          <Skeleton className="h-4 w-full max-w-md" />
          <Skeleton className="h-4 w-4/5 max-w-sm" />
        </>
      )}
      <Skeleton className="h-4 w-64" />
    </div>
  )
}

function ListToolbarSkeleton() {
  return (
    <div className="mb-2 flex items-center justify-between border-b border-border py-3 lg:pt-4">
      <Skeleton className="h-3 w-14" />
      <Skeleton className="h-4 w-16" />
    </div>
  )
}

function VenueListSkeleton() {
  return (
    <div className="divide-y divide-border border border-border">
      {Array.from({ length: 6 }).map((_, i) => (
        <VenueRowSkeleton key={i} />
      ))}
    </div>
  )
}

export function VenuesDashboardSkeleton() {
  return (
    <div
      className="flex h-full min-h-0 flex-1 flex-col leading-loose"
      aria-busy
      aria-label="Loading venues"
    >
      <div className="flex h-full min-h-0 flex-col lg:hidden">
        <header className="shrink-0 border-b border-border px-4 py-4">
          <HeaderSkeleton compact />
        </header>
        <main className="flex min-h-0 flex-1 flex-col px-4">
          <ListToolbarSkeleton />
          <ScrollArea className="min-h-0 flex-1">
            <VenueListSkeleton />
          </ScrollArea>
        </main>
      </div>

      <div className="hidden h-full min-h-0 w-full flex-1 lg:flex">
        <aside className="flex h-full min-h-0 w-full max-w-sm shrink-0 basis-[33%] flex-col border-r border-border">
          <ScrollArea className="min-h-0 flex-1">
            <div className="space-y-4 p-4">
              <HeaderSkeleton />
              <FilterPanelSkeleton />
              <div className="space-y-2 pt-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          </ScrollArea>
        </aside>
        <main className="flex h-full min-h-0 min-w-0 flex-1 flex-col px-4">
          <ListToolbarSkeleton />
          <ScrollArea className="min-h-0 flex-1">
            <VenueListSkeleton />
          </ScrollArea>
        </main>
      </div>
    </div>
  )
}

import { Skeleton } from "@/components/ui/skeleton"

export function VenueRowSkeleton() {
  return (
    <article className="flex flex-col gap-4 p-4 sm:flex-row sm:gap-6">
      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-14" />
          <Skeleton className="h-5 w-16" />
        </div>
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-full max-w-md" />
        <Skeleton className="h-4 w-3/4 max-w-sm" />
        <div className="flex gap-1">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-24" />
        </div>
        <Skeleton className="h-4 w-24" />
      </div>
      <div className="w-full shrink-0 space-y-3 sm:w-60">
        <div className="space-y-2">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-36" />
          <Skeleton className="h-6 w-20" />
        </div>
        <div className="space-y-2 border-t border-border pt-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </article>
  )
}

import { Skeleton } from "@/components/ui/skeleton"

export function PastDeadlineRowSkeleton() {
  return (
    <article className="flex flex-col gap-4 py-5 sm:flex-row sm:gap-8">
      <div className="min-w-0 flex-1 space-y-2">
        <Skeleton className="h-5 w-48" />
        <Skeleton className="h-4 w-32" />
        <div className="flex gap-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-28" />
        </div>
        <div className="flex gap-1">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
        </div>
      </div>
      <div className="w-full shrink-0 space-y-2 sm:w-72">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-4 w-28" />
      </div>
    </article>
  )
}

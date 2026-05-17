import { Skeleton } from "@/components/ui/skeleton"

export function MonthGridSkeleton() {
  return (
    <div className="min-w-0">
      <Skeleton className="mx-auto mb-2 h-4 w-20" />
      <div className="mb-1 grid grid-cols-7 gap-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} className="mx-auto h-3 w-4" />
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1">
        {Array.from({ length: 35 }).map((_, i) => (
          <Skeleton key={i} className="mx-auto h-8 w-8" />
        ))}
      </div>
    </div>
  )
}

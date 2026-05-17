import { Suspense } from "react"

import { PastDeadlinesView } from "@/components/past-deadlines-view"
import { PastDeadlinesViewSkeleton } from "@/components/skeletons/past-deadlines-view-skeleton"

export default function PastDeadlinesPage() {
  return (
    <Suspense fallback={<PastDeadlinesViewSkeleton />}>
      <PastDeadlinesView />
    </Suspense>
  )
}

import { Suspense } from "react"

import { VenuesDashboardSkeleton } from "@/components/skeletons/venues-dashboard-skeleton"
import { VenuesDashboard } from "@/components/venues-dashboard"

export default function HomePage() {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <Suspense fallback={<VenuesDashboardSkeleton />}>
        <VenuesDashboard />
      </Suspense>
    </div>
  )
}

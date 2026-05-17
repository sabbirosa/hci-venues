import { VenuesDashboardSkeleton } from "@/components/skeletons/venues-dashboard-skeleton"

export default function HomeLoading() {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <VenuesDashboardSkeleton />
    </div>
  )
}

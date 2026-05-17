import { Suspense } from "react"

import { VenuesDashboard } from "@/components/venues-dashboard"

export default function Page() {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <Suspense
        fallback={
          <p className="text-muted-foreground p-4">Loading venues…</p>
        }
      >
        <VenuesDashboard />
      </Suspense>
    </div>
  )
}

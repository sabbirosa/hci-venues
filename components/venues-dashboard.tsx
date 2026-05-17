"use client"

import { RiCloseLine, RiFilter3Line } from "@remixicon/react"
import { useEffect, useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { VenueDashboardHeader } from "@/components/venue-dashboard-header"
import { VenuesSidebarFooter } from "@/components/venues-sidebar-footer"
import { VenueFiltersPanel } from "@/components/venue-filters-panel"
import { VenueInfiniteList } from "@/components/venue-infinite-list"
import { venues } from "@/data"
import { countVenuesWithDeadlineNearby } from "@/lib/venues/get-next-edition"
import { compareVenues } from "@/lib/venues/sort-venues"
import type { VenueCategory } from "@/lib/venues/types"
import { useVenueFilters } from "@/lib/venues/use-venue-filters"

function VenueListToolbar({ total }: { total: number }) {
  return (
    <div className="flex shrink-0 items-center justify-between py-3 lg:pt-4">
      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Venues
      </p>
      <p className="text-sm text-muted-foreground">{total} total</p>
    </div>
  )
}

function SidebarFilters({
  venueCount,
  upcomingNearbyCount,
  deadlinesReady,
  filterPanelProps,
}: {
  venueCount: number
  upcomingNearbyCount: number
  deadlinesReady: boolean
  filterPanelProps: React.ComponentProps<typeof VenueFiltersPanel>
}) {
  return (
    <>
      <VenueDashboardHeader
        className="pb-4"
        venueCount={venueCount}
        upcomingNearbyCount={upcomingNearbyCount}
        deadlinesReady={deadlinesReady}
      />
      <VenueFiltersPanel className="pb-4" {...filterPanelProps} />
      <VenuesSidebarFooter />
    </>
  )
}

export function VenuesDashboard() {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [deadlinesReady, setDeadlinesReady] = useState(false)

  useEffect(() => {
    setDeadlinesReady(true)
  }, [])
  const {
    filters: { search, category, publisher, core, scopus },
    searchInput,
    activeFilterCount,
    hasActiveFilters,
    setSearch,
    setCategory,
    setPublisher,
    setCore,
    setScopus,
    clearFilters,
  } = useVenueFilters()

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return venues
      .filter((v) => {
        if (publisher !== "all" && v.publisher !== publisher) return false
        if (core !== "all" && v.coreRank !== core) return false
        if (
          category !== "all" &&
          !v.categories.includes(category as VenueCategory)
        )
          return false
        if (scopus === "yes" && !v.scopusIndexed) return false
        if (scopus === "no" && v.scopusIndexed) return false
        if (!q) return true
        return (
          v.acronym.toLowerCase().includes(q) ||
          v.fullName.toLowerCase().includes(q) ||
          v.categories.some((c: VenueCategory) => c.toLowerCase().includes(q))
        )
      })
      .sort(
        deadlinesReady
          ? compareVenues
          : (a, b) => a.acronym.localeCompare(b.acronym),
      )
  }, [search, category, publisher, core, scopus, deadlinesReady])

  const upcomingNearbyCount = useMemo(
    () => (deadlinesReady ? countVenuesWithDeadlineNearby(venues) : 0),
    [deadlinesReady],
  )

  const filterPanelProps = {
    searchInput,
    publisher,
    core,
    category,
    scopus,
    hasActiveFilters,
    activeFilterCount,
    onSearchChange: setSearch,
    onPublisherChange: setPublisher,
    onCoreChange: setCore,
    onCategoryChange: setCategory,
    onScopusChange: setScopus,
    onClearFilters: clearFilters,
  }

  const sidebarContent = (
    <SidebarFilters
      venueCount={venues.length}
      upcomingNearbyCount={upcomingNearbyCount}
      deadlinesReady={deadlinesReady}
      filterPanelProps={filterPanelProps}
    />
  )

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col leading-loose">
      {/* Mobile */}
      <Drawer
        open={filtersOpen}
        onOpenChange={setFiltersOpen}
        direction="left"
      >
        <div className="flex h-full min-h-0 flex-col lg:hidden">
          <div className="shrink-0 border-b border-border bg-background px-4 py-4">
            <div className="flex items-start justify-between gap-2">
              <VenueDashboardHeader
                className="min-w-0 flex-1"
                venueCount={venues.length}
                upcomingNearbyCount={upcomingNearbyCount}
                deadlinesReady={deadlinesReady}
                compact
              />
              {filtersOpen && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  className="shrink-0"
                  aria-label="Close filters"
                  onClick={() => setFiltersOpen(false)}
                >
                  <RiCloseLine className="size-5" />
                </Button>
              )}
            </div>
          </div>

          <main className="flex min-h-0 flex-1 flex-col px-4">
            <VenueListToolbar total={filtered.length} />
            <VenueInfiniteList venues={filtered} />
          </main>

          <DrawerContent className="flex h-full max-h-svh flex-col rounded-none data-[vaul-drawer-direction=left]:mt-0 data-[vaul-drawer-direction=left]:max-h-svh data-[vaul-drawer-direction=left]:w-[min(100vw-3rem,22rem)]">
            <ScrollArea className="min-h-0 flex-1">
              <div className="p-4">{sidebarContent}</div>
            </ScrollArea>
          </DrawerContent>

          {!filtersOpen && (
            <Button
              type="button"
              size="icon-lg"
              className="fixed right-4 bottom-4 z-40 size-14 rounded-full shadow-lg"
              aria-label={
                hasActiveFilters
                  ? `Open filters (${activeFilterCount} active)`
                  : "Open filters"
              }
              onClick={() => setFiltersOpen(true)}
            >
              <RiFilter3Line className="size-5" />
              {hasActiveFilters && (
                <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-primary-foreground text-[10px] font-bold text-primary">
                  {activeFilterCount}
                </span>
              )}
            </Button>
          )}
        </div>
      </Drawer>

      {/* Desktop */}
      <div className="hidden h-full min-h-0 w-full flex-1 lg:flex">
        <aside className="flex h-full min-h-0 w-full max-w-sm shrink-0 basis-[33%] flex-col border-r border-border bg-background">
          <ScrollArea className="min-h-0 flex-1">
            <div className="p-4">{sidebarContent}</div>
          </ScrollArea>
        </aside>

        <main className="flex h-full min-h-0 min-w-0 flex-1 flex-col px-4">
            <VenueListToolbar total={filtered.length} />
            <VenueInfiniteList venues={filtered} />
          </main>
      </div>
    </div>
  )
}

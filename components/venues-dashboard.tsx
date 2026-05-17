"use client"

import Link from "next/link"
import { useMemo } from "react"

import { CoreRankBadge } from "@/components/core-rank-badge"
import { FilterField, type FilterOption } from "@/components/filter-field"
import { CoreRankHelp } from "@/components/tooltips"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { VenueInfiniteList } from "@/components/venue-infinite-list"
import { allCategories, allPublishers, venues } from "@/data"
import { NEARBY_DEADLINE_DAYS } from "@/lib/venues/dates"
import { countVenuesWithDeadlineNearby } from "@/lib/venues/get-next-edition"
import { compareVenues } from "@/lib/venues/sort-venues"
import type { CoreRank, VenueCategory } from "@/lib/venues/types"
import { useVenueFilters } from "@/lib/venues/use-venue-filters"

const coreRanks: CoreRank[] = ["A*", "A", "B", "C", "Regional", "Unranked"]

function withAllOption(
  items: readonly string[],
  allLabel = "All"
): FilterOption[] {
  return [
    { value: "all", label: allLabel },
    ...items.map((item) => ({ value: item, label: item })),
  ]
}

const publisherOptions = withAllOption(allPublishers)
const coreOptions: FilterOption[] = [
  { value: "all", label: "All ranks" },
  ...coreRanks.map((r) => ({ value: r, label: `CORE ${r}` })),
]
const categoryOptions = withAllOption(allCategories, "All topics")

export function VenuesDashboard() {
  const {
    filters: { search, category, publisher, core },
    searchInput,
    activeFilterCount,
    hasActiveFilters,
    setSearch,
    setCategory,
    setPublisher,
    setCore,
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
        if (!q) return true
        return (
          v.acronym.toLowerCase().includes(q) ||
          v.fullName.toLowerCase().includes(q) ||
          v.categories.some((c: VenueCategory) => c.toLowerCase().includes(q))
        )
      })
      .sort(compareVenues)
  }, [search, category, publisher, core])

  const upcomingNearbyCount = useMemo(
    () => countVenuesWithDeadlineNearby(venues),
    []
  )

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col leading-loose">
      <ResizablePanelGroup
        id="venues-layout"
        orientation="horizontal"
        defaultLayout={{ sidebar: 33, main: 67 }}
        className="h-full min-h-0 w-full flex-1"
      >
        <ResizablePanel
          id="sidebar"
          defaultSize="33"
          minSize="20"
          maxSize="50"
          className="flex flex-col"
        >
          <aside className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden p-4">
            <div className="min-h-0 flex-1 scrollbar-none overflow-y-auto overscroll-contain">
              <header className="pb-4">
                <h1 className="text-xl font-medium">HCI Venues Tracker</h1>
                <p className="text-muted-foreground">
                  Rankings (CORE), Scopus indexing, categories, and countdowns
                  to paper submission deadlines.
                </p>
                <p className="text-muted-foreground">
                  {venues.length} venues · {upcomingNearbyCount} with upcoming
                  deadlines in the next {NEARBY_DEADLINE_DAYS} days
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hover a <CoreRankBadge rank="A*" className="align-middle" />{" "}
                  tag in the list to see what each rank means.
                </p>
              </header>

              <div className="sticky top-0 z-10 bg-background pb-4">
                <section className="space-y-4 border border-border bg-background p-4 shadow-sm">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                      Search
                    </p>
                    <Input
                      type="search"
                      placeholder="Acronym or name…"
                      value={searchInput}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>

                  <FilterField
                    label="Publisher"
                    value={publisher}
                    onValueChange={setPublisher}
                    options={publisherOptions}
                  />

                  <FilterField
                    label="CORE rank"
                    labelExtra={<CoreRankHelp />}
                    value={core}
                    onValueChange={setCore}
                    options={coreOptions}
                  />

                  <FilterField
                    label="Topic"
                    value={category}
                    onValueChange={setCategory}
                    options={categoryOptions}
                  />

                  {hasActiveFilters && (
                    <Button
                      type="button"
                      variant="link"
                      size="xs"
                      className="h-auto px-0 tracking-normal normal-case"
                      onClick={clearFilters}
                    >
                      Clear filter{activeFilterCount === 1 ? "" : "s"}
                    </Button>
                  )}

                  <div className="space-y-2 pt-4">
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                      Explore
                    </p>
                    <Link
                      href="/calendar"
                      className="block text-sm font-medium tracking-widest text-primary uppercase hover:underline"
                    >
                      Calendar →
                    </Link>
                    <Link
                      href="/past-deadlines"
                      className="block text-sm font-medium tracking-widest text-primary uppercase hover:underline"
                    >
                      Past Deadlines →
                    </Link>
                  </div>
                </section>
              </div>

              <footer className="space-y-3 pt-2 text-sm text-muted-foreground">
                <p>
                  CORE ranks from{" "}
                  <a
                    href="https://portal.core.edu.au/conf-ranks/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    portal.core.edu.au
                  </a>
                  .
                </p>
              </footer>
            </div>
          </aside>
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel
          id="main"
          defaultSize="67"
          minSize="35"
          className="flex flex-col"
        >
          <main className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden px-4">
            <div className="mb-2 flex shrink-0 items-center justify-between border-b border-border pt-4">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Venues
              </p>
              <p className="text-sm text-muted-foreground">
                {filtered.length} total
              </p>
            </div>

            <VenueInfiniteList venues={filtered} />
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

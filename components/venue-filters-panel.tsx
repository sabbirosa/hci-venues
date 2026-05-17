"use client"

import Link from "next/link"

import { FilterField, type FilterOption } from "@/components/filter-field"
import { CoreRankHelp } from "@/components/tooltips"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { allPublishers, topicFilterCategories } from "@/data"
import type { CoreRank } from "@/lib/venues/types"
import { cn } from "@/lib/utils"

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
const categoryOptions = withAllOption(topicFilterCategories, "All topics")
const scopusOptions: FilterOption[] = [
  { value: "all", label: "All" },
  { value: "yes", label: "Indexed" },
  { value: "no", label: "Not indexed" },
]

export function VenueFiltersPanel({
  searchInput,
  publisher,
  core,
  category,
  scopus,
  hasActiveFilters,
  activeFilterCount,
  onSearchChange,
  onPublisherChange,
  onCoreChange,
  onCategoryChange,
  onScopusChange,
  onClearFilters,
  className,
}: {
  searchInput: string
  publisher: string
  core: string
  category: string
  scopus: string
  hasActiveFilters: boolean
  activeFilterCount: number
  onSearchChange: (value: string) => void
  onPublisherChange: (value: string) => void
  onCoreChange: (value: string) => void
  onCategoryChange: (value: string) => void
  onScopusChange: (value: string) => void
  onClearFilters: () => void
  className?: string
}) {
  return (
    <section className={cn(className)} aria-label="Venue filters">
      <div className="space-y-4 border border-border bg-background p-4 shadow-sm">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Search
          </p>
          <Input
            type="search"
            placeholder="Acronym or name…"
            value={searchInput}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <FilterField
          label="Publisher"
          value={publisher}
          onValueChange={onPublisherChange}
          options={publisherOptions}
        />

        <FilterField
          label="CORE rank"
          labelExtra={<CoreRankHelp />}
          value={core}
          onValueChange={onCoreChange}
          options={coreOptions}
        />

        <FilterField
          label="Topic"
          value={category}
          onValueChange={onCategoryChange}
          options={categoryOptions}
        />

        <FilterField
          label="Scopus indexed"
          value={scopus}
          onValueChange={onScopusChange}
          options={scopusOptions}
        />

        {hasActiveFilters && (
          <Button
            type="button"
            variant="link"
            size="xs"
            className="h-auto px-0 tracking-normal normal-case"
            onClick={onClearFilters}
          >
            Clear filter{activeFilterCount === 1 ? "" : "s"}
          </Button>
        )}

        <div className="space-y-2 border-t border-border pt-4">
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
      </div>
    </section>
  )
}

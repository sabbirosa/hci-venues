"use client"

import { useMemo, useState } from "react"

import { PastDeadlineRow } from "@/components/past-deadline-row"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { venues } from "@/data"
import { getPastProceedings } from "@/lib/venues/proceedings"

export function PastDeadlinesView() {
  const [search, setSearch] = useState("")
  const proceedings = useMemo(() => getPastProceedings(venues), [])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return proceedings
    return proceedings.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.venue.acronym.toLowerCase().includes(q) ||
        p.venue.categories.some((c) => c.toLowerCase().includes(q))
    )
  }, [proceedings, search])

  return (
    <ScrollArea className="h-full min-h-0">
      <div className="space-y-6 pr-3">
        <header className="space-y-2">
          <h1 className="text-xl font-medium">Past Deadlines</h1>
          <p className="text-muted-foreground">
            Proceedings whose submission deadlines have passed
          </p>
        </header>

        <div className="max-w-md space-y-2">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Search
          </p>
          <Input
            type="search"
            placeholder="Conference name or topic…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-muted-foreground">No past proceedings match.</p>
        ) : (
          <div className="divide-y divide-border">
            {filtered.map((p) => (
              <PastDeadlineRow
                key={`${p.venue.id}-${p.edition.editionId ?? p.edition.year}`}
                proceeding={p}
              />
            ))}
          </div>
        )}
      </div>
    </ScrollArea>
  )
}

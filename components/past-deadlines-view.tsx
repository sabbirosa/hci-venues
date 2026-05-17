"use client"

import { useMemo, useState } from "react"

import { PastDeadlineRow } from "@/components/past-deadline-row"
import { Input } from "@/components/ui/input"
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
        p.venue.categories.some((c) => c.toLowerCase().includes(q)),
    )
  }, [proceedings, search])

  return (
    <div className="scrollbar-none h-full min-h-0 space-y-6 overflow-y-auto overscroll-contain">
      <header className="space-y-2">
        <h1 className="text-xl font-medium">Past Deadlines</h1>
        <p className="text-muted-foreground">
          Proceedings whose submission deadlines have passed — one row per
          edition.
        </p>
      </header>

      <div className="max-w-md space-y-2">
        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">
          Search
        </p>
        <Input
          type="search"
          placeholder="Conference name or topic…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <p className="text-muted-foreground text-sm">
        {filtered.length} of {proceedings.length} shown
      </p>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground">No past proceedings match.</p>
      ) : (
        <div className="border-border divide-border divide-y border-t">
          {filtered.map((p) => (
            <PastDeadlineRow
              key={`${p.venue.id}-${p.edition.editionId ?? p.edition.year}`}
              proceeding={p}
            />
          ))}
        </div>
      )}
    </div>
  )
}

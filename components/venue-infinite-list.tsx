"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { VenueRow } from "@/components/venue-row"
import type { Venue } from "@/lib/venues/types"

const PAGE_SIZE = 12

export function VenueInfiniteList({ venues }: { venues: Venue[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const listKey = venues.map((v) => v.id).join(",")

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
    scrollRef.current?.scrollTo({ top: 0 })
  }, [listKey])

  const visible = venues.slice(0, visibleCount)
  const hasMore = visibleCount < venues.length

  const loadMore = useCallback(() => {
    setVisibleCount((c) => Math.min(c + PAGE_SIZE, venues.length))
  }, [venues.length])

  useEffect(() => {
    const root = scrollRef.current
    const sentinel = sentinelRef.current
    if (!root || !sentinel || !hasMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore()
      },
      { root, rootMargin: "120px", threshold: 0 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [hasMore, loadMore, listKey])

  if (venues.length === 0) {
    return <p className="text-muted-foreground">No venues match.</p>
  }

  return (
    <div
      ref={scrollRef}
      className="min-h-0 flex-1 scrollbar-none overflow-y-auto overscroll-contain pb-2"
    >
      <div className="divide-y divide-border border border-border">
        {visible.map((venue) => (
          <VenueRow key={venue.id} venue={venue} />
        ))}
      </div>

      <div ref={sentinelRef} className="h-px shrink-0" aria-hidden />

      {hasMore && (
        <p className="py-4 text-center text-sm text-muted-foreground">
          Loading more…
        </p>
      )}
    </div>
  )
}

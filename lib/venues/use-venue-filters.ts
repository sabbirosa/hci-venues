"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { allCategories, allPublishers } from "@/data"
import type { CoreRank } from "@/lib/venues/types"

const coreRanks: CoreRank[] = ["A*", "A", "B", "C", "Regional", "Unranked"]
const VALID_CORE = ["all", ...coreRanks] as const

export interface VenueFilters {
  search: string
  publisher: string
  core: string
  category: string
}

function readFilters(params: URLSearchParams): VenueFilters {
  const publisher = params.get("publisher") ?? "all"
  const core = params.get("core") ?? "all"
  const category = params.get("topic") ?? "all"

  return {
    search: params.get("q") ?? "",
    publisher:
      publisher === "all" ||
      (allPublishers as readonly string[]).includes(publisher)
        ? publisher
        : "all",
    core: VALID_CORE.includes(core as (typeof VALID_CORE)[number]) ? core : "all",
    category:
      category === "all" ||
      (allCategories as readonly string[]).includes(category)
        ? category
        : "all",
  }
}

function writeFilters(
  current: URLSearchParams,
  patch: Partial<VenueFilters>,
): URLSearchParams {
  const next = new URLSearchParams(current.toString())

  const apply = (key: string, value: string | undefined, omitWhen = "all") => {
    if (value === undefined) return
    if (!value || value === omitWhen) next.delete(key)
    else next.set(key, value)
  }

  if ("search" in patch) apply("q", patch.search, "")
  if ("publisher" in patch) apply("publisher", patch.publisher)
  if ("core" in patch) apply("core", patch.core)
  if ("category" in patch) apply("topic", patch.category)

  return next
}

export function useVenueFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const filters = useMemo(
    () => readFilters(searchParams),
    [searchParams],
  )

  const replaceParams = useCallback(
    (patch: Partial<VenueFilters>) => {
      const next = writeFilters(searchParams, patch)
      const qs = next.toString()
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
    },
    [pathname, router, searchParams],
  )

  const [searchInput, setSearchInput] = useState(filters.search)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setSearchInput(filters.search)
  }, [filters.search])

  const setSearch = useCallback(
    (value: string) => {
      setSearchInput(value)
      if (debounceRef.current) clearTimeout(debounceRef.current)
      debounceRef.current = setTimeout(() => {
        replaceParams({ search: value })
      }, 300)
    },
    [replaceParams],
  )

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  const setPublisher = useCallback(
    (value: string) => replaceParams({ publisher: value }),
    [replaceParams],
  )
  const setCore = useCallback(
    (value: string) => replaceParams({ core: value }),
    [replaceParams],
  )
  const setCategory = useCallback(
    (value: string) => replaceParams({ category: value }),
    [replaceParams],
  )

  const activeFilterCount = useMemo(() => {
    let count = 0
    if (filters.search !== "") count++
    if (filters.publisher !== "all") count++
    if (filters.core !== "all") count++
    if (filters.category !== "all") count++
    return count
  }, [filters])

  const hasActiveFilters = activeFilterCount > 0

  const clearFilters = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    setSearchInput("")
    router.replace(pathname, { scroll: false })
  }, [pathname, router])

  return {
    filters,
    searchInput,
    activeFilterCount,
    hasActiveFilters,
    setSearch,
    setPublisher,
    setCore,
    setCategory,
    clearFilters,
  }
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Venues" },
  { href: "/calendar", label: "Calendar" },
  { href: "/past-deadlines", label: "Past Deadlines" },
] as const

export function SiteNav({ hideOnHome = false }: { hideOnHome?: boolean }) {
  const pathname = usePathname()

  if (hideOnHome && pathname === "/") return null

  return (
    <nav
      className="border-border mb-6 flex flex-wrap items-center gap-1 border-b pb-4"
      aria-label="Main"
    >
      {links.map(({ href, label }) => {
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}

"use client"

import { usePathname } from "next/navigation"

import { SiteNav } from "@/components/site-nav"
import { cn } from "@/lib/utils"

export function SiteContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <div
      className={cn(
        "mx-auto flex h-svh max-h-svh w-full max-w-6xl flex-col overflow-hidden px-4 sm:px-6",
        isHome ? "py-0" : "py-6",
        className,
      )}
    >
      <SiteNav hideOnHome />
      <div className="min-h-0 flex-1 overflow-hidden [&>*]:h-full [&>*]:min-h-0">
        {children}
      </div>
    </div>
  )
}

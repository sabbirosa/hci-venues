import { RiArrowRightUpLine } from "@remixicon/react"
import Link from "next/link"

import { cn } from "@/lib/utils"

const defaultClassName =
  "text-sm tracking-widest text-primary uppercase hover:underline"

export function ExternalLink({
  href,
  children,
  className,
  showIcon = true,
}: {
  href: string
  children: React.ReactNode
  className?: string
  showIcon?: boolean
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(defaultClassName, className)}
    >
      {showIcon ? (
        <span className="inline-flex items-center gap-1">
          {children}
          <RiArrowRightUpLine className="size-4 font-thin" />
        </span>
      ) : (
        children
      )}
    </Link>
  )
}

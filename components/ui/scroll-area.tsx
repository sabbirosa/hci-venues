"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type ScrollAreaProps = React.ComponentProps<"div"> & {
  viewportRef?: React.Ref<HTMLDivElement>
  viewportClassName?: string
}

/**
 * Scroll container with hidden scrollbars. Uses native overflow so flex
 * layouts scroll reliably (Radix ScrollArea breaks when the bar is removed).
 */
function ScrollArea({
  className,
  children,
  viewportRef,
  viewportClassName,
  ...props
}: ScrollAreaProps) {
  return (
    <div
      data-slot="scroll-area"
      className={cn("relative min-h-0 overflow-hidden", className)}
      {...props}
    >
      <div
        ref={viewportRef}
        data-slot="scroll-area-viewport"
        className={cn(
          "scrollbar-none size-full overflow-x-hidden overflow-y-auto overscroll-contain",
          viewportClassName
        )}
      >
        {children}
      </div>
    </div>
  )
}

/** @deprecated Use ScrollArea; kept for API compatibility with shadcn exports. */
function ScrollBar() {
  return null
}

export { ScrollArea, ScrollBar }

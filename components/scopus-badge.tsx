"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const scopusDescription =
  "Indexed in Scopus (Elsevier's abstract and citation database). Proceedings from this venue may be tracked for citations, author profiles, and research metrics."

export function ScopusBadge({ className }: { className?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={cn(
            "inline-block cursor-default bg-blue-500/80 px-1.5 py-0.5 text-xs font-semibold tracking-widest text-white uppercase",
            className,
          )}
        >
          Scopus
        </span>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="flex w-64 max-w-64 flex-col items-start p-3 text-sm leading-snug"
      >
        {scopusDescription}
      </TooltipContent>
    </Tooltip>
  )
}

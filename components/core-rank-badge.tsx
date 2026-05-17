import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { coreRankBadgeStyles } from "@/lib/venues/core-rank-styles"
import type { CoreRank } from "@/lib/venues/types"
import { cn } from "@/lib/utils"

const rankDescriptions: Record<CoreRank, string> = {
  "A*": "Top tier — flagship venues in human-computer interaction.",
  A: "Strong venue — widely recognised in the field.",
  B: "Solid venue — established reputation.",
  C: "Recognised venue — smaller or regional scope.",
  Regional: "Regional ranking in CORE.",
  Unranked: "Not listed in the current CORE conference ranks.",
}

export function CoreRankBadge({
  rank,
  className,
}: {
  rank: CoreRank
  className?: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={cn(
            "inline-block cursor-default px-1.5 py-0.5 text-xs font-semibold tracking-widest uppercase",
            coreRankBadgeStyles[rank],
            className,
          )}
        >
          CORE {rank}
        </span>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="flex w-64 max-w-64 flex-col items-start p-3 text-sm leading-snug"
      >
        {rankDescriptions[rank]}
      </TooltipContent>
    </Tooltip>
  )
}

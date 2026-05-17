"use client"

import { CoreRankTooltipContent } from "@/components/tooltips/core-rank-tooltip-content"
import { HelpTooltip } from "@/components/tooltips/help-tooltip"

export function CoreRankHelp() {
  return (
    <HelpTooltip ariaLabel="What are CORE ranks?">
      <CoreRankTooltipContent />
    </HelpTooltip>
  )
}

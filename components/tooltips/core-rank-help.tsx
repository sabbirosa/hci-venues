"use client"

import { CoreRankTooltipContent } from "@/components/tooltips/core-rank-tooltip-content"
import { HelpTooltip } from "@/components/tooltips/help-tooltip"

const CORE_RANKS_URL = "https://portal.core.edu.au/conf-ranks/"

export function CoreRankHelp() {
  return (
    <HelpTooltip ariaLabel="What are CORE ranks?">
      <>
        <CoreRankTooltipContent />
        <p className="text-xs leading-snug text-muted-foreground">
          CORE ranks from{" "}
          <a
            href={CORE_RANKS_URL}
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            portal.core.edu.au
          </a>
          .
        </p>
      </>
    </HelpTooltip>
  )
}

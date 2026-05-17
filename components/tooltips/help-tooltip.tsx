"use client"

import type { ReactNode } from "react"
import { RiQuestionLine } from "@remixicon/react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export function HelpTooltip({
  ariaLabel,
  children,
  side = "right",
  className,
}: {
  ariaLabel: string
  children: ReactNode
  side?: "top" | "right" | "bottom" | "left"
  className?: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground inline-flex shrink-0"
          aria-label={ariaLabel}
        >
          <RiQuestionLine className="size-3.5" />
        </button>
      </TooltipTrigger>
      <TooltipContent
        side={side}
        sideOffset={6}
        className={cn(
          "flex w-64 max-w-64 flex-col items-start gap-2.5 p-3 text-sm leading-snug",
          className,
        )}
      >
        {children}
      </TooltipContent>
    </Tooltip>
  )
}

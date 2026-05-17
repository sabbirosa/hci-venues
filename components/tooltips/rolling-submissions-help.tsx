"use client"

import Link from "next/link"

import { HelpTooltip } from "@/components/tooltips/help-tooltip"

export function RollingSubmissionsHelp({
  learnMoreUrl,
}: {
  learnMoreUrl?: string
}) {
  return (
    <HelpTooltip ariaLabel="What are rolling submissions?">
      <>
        <p>
          Papers submit continuously to{" "}
          <span className="font-medium">Proceedings of the ACM on Human-Computer
          Interaction</span> (PACM HCI). Accepted work is invited to present at
          the conference. Reviews follow a journal-style rolling model with
          revise-and-resubmit rounds—no fixed annual deadline.
        </p>
        {learnMoreUrl && (
          <p className="text-xs leading-snug text-muted-foreground">
            Details on{" "}
            <Link
              href={learnMoreUrl}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              the official rolling submissions page
            </Link>
            .
          </p>
        )}
      </>
    </HelpTooltip>
  )
}

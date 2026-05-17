import { GITHUB_CONTRIBUTE_URL, GITHUB_NEW_ISSUE_URL } from "@/lib/site"
import { cn } from "@/lib/utils"

export function VenuesSidebarFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("text-sm text-muted-foreground", className)}>
      <p>
        Spotted outdated data or want to add a venue?{" "}
        <a
          href={GITHUB_CONTRIBUTE_URL}
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute on GitHub
        </a>{" "}
        or{" "}
        <a
          href={GITHUB_NEW_ISSUE_URL}
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          create an issue
        </a>
        .
      </p>
    </footer>
  )
}

import type { ConferenceEdition, Venue } from "@/lib/venues/types"

export type EditionLinkLabel = "Series" | "Conference" | "Program" | "Proceedings"

export interface EditionLink {
  label: EditionLinkLabel
  href: string
}

/** Edition- and series-level URLs for a single conference year. */
export function getEditionLinks(
  venue: Venue,
  edition: ConferenceEdition,
): EditionLink[] {
  const links: EditionLink[] = []

  if (venue.website) {
    links.push({ label: "Series", href: venue.website })
  }
  if (edition.website) {
    links.push({ label: "Conference", href: edition.website })
  }
  if (edition.programLink) {
    links.push({ label: "Program", href: edition.programLink })
  }
  if (edition.proceedingsLink) {
    links.push({ label: "Proceedings", href: edition.proceedingsLink })
  }

  return links
}

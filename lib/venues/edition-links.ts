import type { ConferenceEdition, Venue } from "@/lib/venues/types"

export type EditionLinkLabel =
  | "Venue Website"
  | "Conference Website"
  | "Program"
  | "Proceedings"

export interface EditionLink {
  label: EditionLinkLabel
  href: string
}

/** Edition- and series-level URLs for a single conference year. */
export function getEditionLinks(
  venue: Venue,
  edition: ConferenceEdition
): EditionLink[] {
  const links: EditionLink[] = []

  if (venue.website) {
    links.push({ label: "Venue Website", href: venue.website })
  }
  if (edition.website) {
    links.push({ label: "Conference Website", href: edition.website })
  }
  if (edition.programLink) {
    links.push({ label: "Program", href: edition.programLink })
  }
  if (edition.proceedingsLink) {
    links.push({ label: "Proceedings", href: edition.proceedingsLink })
  }

  return links
}

/** Program schedule for the active edition, otherwise the permanent series site. */
export function getVenueOfficialSiteHref(
  venue: Venue,
  edition?: ConferenceEdition | null,
): string | undefined {
  return edition?.programLink ?? venue.website
}

export type Publisher =
  | "ACM"
  | "IEEE"
  | "IEEE/ACM"
  | "AAAI/ACM"
  | "USENIX"
  | "BCS"
  | "IW3C2"
  | "Other"

export type CoreRank = "A*" | "A" | "B" | "C" | "Regional" | "Unranked"

export type ConfDatabaseSubject =
  | "HCI"
  | "AI+HCI"
  | "CSCW"
  | "DES"
  | "HAP"
  | "HRI"
  | "SP"
  | "VIS"
  | "XR"
  | "GM"
  | "ART"

export type VenueCategory =
  | "HCI"
  | "UI/UX"
  | "VR/AR/XR"
  | "Mobile & Ubiquitous"
  | "CSCW & Social"
  | "Games & Play"
  | "Design"
  | "Security & Privacy"
  | "AI & Ethics"
  | "Sustainability & ICTD"
  | "Web & Social Media"
  | "Communication"
  | "Systems"
  | "Children"
  | "Graphics"
  | "IT & Service Management"

/** One conference year — one item in `Venue.editions` (oldest → newest). */
export interface ConferenceEdition {
  year: number
  editionId?: string
  startDate: string
  endDate?: string
  location?: string
  paperDeadline?: string
  abstractDeadline?: string
  timezone?: string
  dateLabel?: string
  note?: string
  papersLink?: string
  pwcLink?: string
  hindex?: number
  website?: string
  announced: boolean
}

export interface Venue {
  id: string
  acronym: string
  fullName: string
  publisher: Publisher
  /** @deprecated Optional legacy field; all venues are conferences. */
  type?: "conference"
  categories: VenueCategory[]
  coreRank: CoreRank | null
  scopusIndexed: boolean
  /**
   * Sort-only flag for flagship venues (e.g. CHI). Pins above the list only when
   * the open submission deadline is within 30 days — not when the deadline is
   * months away. Not shown in the UI.
   */
  featured?: boolean
  website?: string
  subject?: ConfDatabaseSubject
  editions?: ConferenceEdition[]
  notes?: string
}

export type NextEditionState =
  | {
      status: "upcoming"
      label: string
      edition: ConferenceEdition
      countdownDate: string
      countdownKind: "abstract" | "paper"
    }
  | {
      status: "deadline-passed"
      label: string
      edition: ConferenceEdition
      message: string
    }
  | {
      status: "deadline-tba"
      label: string
      edition: ConferenceEdition
      message: string
    }
  | {
      status: "passed-awaiting"
      label: string
      previous: ConferenceEdition | null
      message: string
    }

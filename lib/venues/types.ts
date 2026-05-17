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
  /** ICWSM / web & social media scope (short forms). */
  | "SNA & Communities"
  | "Diffusion & Virality"
  | "Sentiment & Opinions"
  | "Misinformation & Trust"
  | "Web Mining & IR"
  | "Digital Humanities"
  | "Politics & Civics"
  | "Digital Health"
  | "Text & Demographics"
  | "Trends & Forecasting"
  | "Media Studies"
  | "Platform Studies"
  | "Web Linguistics"
  | "Social Psychology"
  | "Engagement & Gamification"
  | "Social Innovation"
  | "Organizational Social"
  /** CSCW / PACM HCI scope (short forms). */
  | "Methods & Tools"
  | "Critical & Ethnographic"
  | "Domain Applications"
  | "Ethics & Policy"
  | "Emerging Technologies"
  | "Crossing Boundaries"
  /** BCS-HCI / BritCHI scope (short forms). */
  | "Explainable AI & Trust"
  | "Conversational UX"
  | "AI UX Personalization"
  | "AI-Augmented Design"
  | "Human-AI Collaboration"
  | "Generative UI"
  | "NLP in UX"
  | "Accessible & Inclusive Design"
  | "Human-Robot Interaction"
  | "Cross-Cultural UX"
  | "Learning UX"
  | "Affective Computing"
  | "Persuasive Technology"
  | "Multimodal Interfaces"
  /** CHI subcommittee scope (short forms). */
  | "Computational Interaction"
  | "Novel Devices & Fabrication"

/** One conference year — one item in `Venue.editions` (oldest → newest). */
export interface ConferenceEdition {
  year: number
  editionId?: string
  /** Omit until dates are official (common when `announced` is false). */
  startDate?: string
  endDate?: string
  location?: string
  paperDeadline?: string
  abstractDeadline?: string
  timezone?: string
  dateLabel?: string
  note?: string
  /** This year's conference site (e.g. https://chi2026.acm.org/). */
  website?: string
  /** Session / schedule program (e.g. https://programs.sigchi.org/chi/2026). */
  programLink?: string
  /** Published proceedings (e.g. ACM Digital Library DOI collection). */
  proceedingsLink?: string
  /** Papers With Code collection (optional). */
  pwcLink?: string
  hindex?: number
  announced: boolean
  /**
   * Journal-style rolling submissions for this era (e.g. CSCW from 2027 → PACM HCI).
   * No fixed deadline or countdown for this edition cycle.
   */
  rollingSubmissions?: boolean
  /** Official rolling-submissions / PACM HCI submit page for this era. */
  rollingSubmissionsUrl?: string
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
  /** Permanent series site (e.g. https://chi.acm.org/). */
  website?: string
  subject?: ConfDatabaseSubject
  editions?: ConferenceEdition[]
  notes?: string
  /**
   * All editions use rolling submissions. Prefer per-edition `rollingSubmissions`
   * when only some years use the journal model.
   */
  rollingSubmissions?: boolean
  /** Official rolling-submissions page when the whole venue uses rolling review. */
  rollingSubmissionsUrl?: string
}

export type NextEditionState =
  | {
      status: "upcoming"
      label: string
      edition: ConferenceEdition
      /** When submission targets a different year than the next conference. */
      conferenceEdition?: ConferenceEdition
      countdownDate: string
      countdownKind: "abstract" | "paper"
    }
  | {
      status: "deadline-passed"
      label: string
      edition: ConferenceEdition
      conferenceEdition?: ConferenceEdition
      message: string
    }
  | {
      status: "deadline-tba"
      label: string
      edition: ConferenceEdition
      conferenceEdition?: ConferenceEdition
      message: string
    }
  | {
      status: "passed-awaiting"
      label: string
      previous: ConferenceEdition | null
      message: string
    }
  | {
      status: "rolling-open"
      label: string
      edition: ConferenceEdition | null
      conferenceUpcoming: boolean
      /** Primary label, e.g. "Rolling submissions". */
      message: string
      /** Secondary line, e.g. "Open year-round". */
      subtitle: string
      scheduleMessage?: string
    }

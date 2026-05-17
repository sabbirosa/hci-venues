import type { Venue } from "@/lib/venues/types"

/**
 * SOUPS — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "soups",
  acronym: "SOUPS",
  fullName: "Symposium on Usable Privacy and Security",
  publisher: "USENIX",
  categories: [
    "Security & Privacy",
    "HCI",
    "UI/UX",
    "Ethics & Policy",
    "AI & Ethics",
    "Communication",
    "Methods & Tools",
  ],
  coreRank: "A",
  scopusIndexed: true,
  website: "https://soups.page/",
  editions: [
    {
      year: 2026,
      startDate: "2026-08-23",
      endDate: "2026-08-26",
      location: "Hannover, Germany",
      announced: true,
      abstractDeadline: "2026-02-19",
    }
  ],
}

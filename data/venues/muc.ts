import type { Venue } from "@/lib/venues/types"

/**
 * MUC — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "muc",
  acronym: "MUC",
  fullName: "ACM International Conference on Multimodal Interaction",
  publisher: "ACM",
  categories: [
    "HCI",
    "UI/UX"
  ],
  coreRank: "B",
  scopusIndexed: true,
  website: "https://icmi.acm.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-10-05",
      endDate: "2026-10-09",
      location: "Naples, Italy",
      announced: true,
      abstractDeadline: "2026-04-01",
    }
  ],
  notes: "Also known as ICMI in recent years.",
}

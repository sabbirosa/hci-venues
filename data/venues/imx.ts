import type { Venue } from "@/lib/venues/types"

/**
 * IMX — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "imx",
  acronym: "IMX",
  fullName: "ACM International Conference on Interactive Media Experiences",
  publisher: "ACM",
  categories: [
    "HCI",
    "Design"
  ],
  coreRank: "B",
  scopusIndexed: true,
  editions: [
    {
      year: 2026,
      startDate: "2026-06-09",
      endDate: "2026-06-11",
      location: "Athlone, Ireland",
      announced: true,
      abstractDeadline: "2026-02-01",
    }
  ],
}

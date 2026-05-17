import type { Venue } from "@/lib/venues/types"

/** WWW — research-track dates from https://www2026.thewebconf.org/calls/research-tracks.html */
export const venue: Venue = {
  id: "www",
  acronym: "WWW",
  fullName: "The ACM Web Conference",
  publisher: "IW3C2",
  categories: ["Web & Social Media"],
  coreRank: "A*",
  scopusIndexed: true,
  website: "https://iw3c2.org",
  editions: [
    {
      year: 2026,
      startDate: "2026-06-29",
      endDate: "2026-07-03",
      location: "Dubai, UAE",
      announced: true,
      abstractDeadline: "2025-09-30",
      paperDeadline: "2025-10-07",
      timezone: "AoE",
      website: "https://www2026.thewebconf.org",
    },
    {
      year: 2027,
      location: "Dublin, Ireland",
      announced: false,
      dateLabel: "Date TBD",
      website: "https://www2027.thewebconf.org",
    },
  ],
}

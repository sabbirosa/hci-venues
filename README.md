# HCI Venues Tracker

Track HCI and related conferences in one place: **CORE ranks**, **Scopus indexing**, **topics**, **submission countdowns**, a **year calendar**, and **past deadlines**. Everything is curated by hand—there is no live feed from an external API.

The site has three views:

- **Venues** — search and filter the list; see the next deadline and conference dates per venue.
- **Calendar** — deadlines and conference dates across the year.
- **Past deadlines** — editions whose submission window has already closed.

---

## How data is stored

Each conference is a **TypeScript record** in the repository (one file per venue). The app reads these files at build time—nothing is fetched from a database at runtime.

A venue has **stable metadata** (name, publisher, rank, topics) and an **`editions` list**: one entry per conference year, oldest to newest. Dates are always **`YYYY-MM-DD`** (for example `2026-06-02`).

For the home-page countdown, the app uses the nearest upcoming edition, then **`abstractDeadline`** if present, otherwise **`paperDeadline`**.

### Venue fields

| Field | Meaning |
|-------|---------|
| `id` | Unique slug (e.g. `ozchi`, `chi`) |
| `acronym` | Short name shown in the list (e.g. OzCHI, CHI) |
| `fullName` | Full conference title |
| `publisher` | ACM, IEEE, IEEE/ACM, AAAI/ACM, USENIX, BCS, IW3C2, or Other |
| `categories` | Topic tags (HCI, UI/UX, CSCW & Social, etc.) |
| `coreRank` | CORE rank: A*, A, B, C, Regional, Unranked, or none |
| `scopusIndexed` | Whether the venue is treated as Scopus-indexed in this tracker |
| `website` | Official conference site (optional) |
| `featured` | Internal sort flag for flagship venues; only affects order when a deadline is within 30 days |
| `notes` | Maintainer notes (optional; not shown on the main card) |
| `editions` | List of per-year records (see below) |

### Edition fields (per year)

| Field | Meaning |
|-------|---------|
| `year` | Conference year (e.g. 2026) |
| `startDate` | First day of the conference |
| `endDate` | Last day (optional) |
| `location` | City / country (optional) |
| `abstractDeadline` | Abstract submission due date—used for the countdown when set |
| `paperDeadline` | Full-paper due date—used for the countdown if there is no abstract deadline |
| `announced` | `true` when dates are official; `false` for placeholders or TBA |
| `editionId`, `timezone`, `dateLabel`, `note`, `papersLink`, `pwcLink`, `hindex`, `website` | Optional extra metadata |

Do not guess deadlines. Use the official CFP or conference site, or leave deadlines out until they are published.

**Trusted sources:** official conference / CFP pages, [CORE Conference Rankings](https://portal.core.edu.au/conf-ranks/). Link your source in issues and pull requests.

---

## Contributing

We especially welcome **deadline updates**, **new years**, **location/date fixes**, and **new venues**. You can report a change or submit it yourself.

### Open an issue

Use this when you are not editing the repo, or when something needs discussion.

1. On GitHub, go to **Issues** → **New issue**.
2. Use a clear title (e.g. `OzCHI 2026 abstract deadline is wrong`).
3. Include:
   - Venue acronym and edition year
   - What should change (deadline, dates, location, rank, Scopus, etc.)
   - A link to the official source (CFP or conference site)

A maintainer can apply the update from your report.

### Open a pull request

Use this when you have edited the data yourself.

1. Fork the repository and create a branch (e.g. `update-ozchi-2026-deadline`).
2. Edit the venue’s data file (search the repo by acronym if you are unsure which file).
3. For a **new year**, add a new edition object to the `editions` list (keep years in order).
4. For a **new venue**, add a new venue file and register it in the venue index so the app includes it.
5. Before opening the PR, run `bun run typecheck` and `bun run build` if you have the project set up locally.
6. Open a **Pull request** to `main` with a short description and the **official source link**.

We merge when the change matches a reliable source.

### Local setup (optional)

```bash
bun install
bun run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

Questions? Open an issue. Thank you for helping keep HCI deadlines accurate.

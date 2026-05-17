/** Open submission deadlines within this many days count as "nearby". */
export const NEARBY_DEADLINE_DAYS = 30

export function parseDay(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d, 23, 59, 59, 999)
}

/** True when `iso` is today or within the next `days` calendar days (inclusive). */
export function isDeadlineWithinDays(
  iso: string,
  days: number,
  ref: Date = new Date(),
): boolean {
  const deadline = parseDay(iso)
  const start = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate())
  const end = new Date(start)
  end.setDate(end.getDate() + days)
  end.setHours(23, 59, 59, 999)
  return deadline >= start && deadline <= end
}

export function formatShortDate(iso: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso + "T12:00:00"))
}

export function formatDateRange(start: string, end?: string): string {
  const fmt = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
  const startStr = fmt.format(new Date(start + "T12:00:00"))
  if (!end || end === start) return startStr
  return `${startStr} – ${fmt.format(new Date(end + "T12:00:00"))}`
}

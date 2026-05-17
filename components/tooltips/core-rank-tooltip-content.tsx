import { icore2026Summary } from "@/data/constants"

export function CoreRankTooltipContent() {
  return (
    <>
      <p>
        CORE ranks come from the Computing Research &amp; Education conference
        ranking. Hover a rank tag in the venue list for details.
      </p>
      <div className="w-full space-y-1.5">
        <p className="text-xs font-semibold uppercase tracking-wide">
          ICORE 2026 summary
        </p>
        <ul className="w-full space-y-0.5 text-xs leading-relaxed">
          {icore2026Summary.map(({ rank, detail }) => (
            <li key={rank}>
              <span className="font-medium">{rank}</span> — {detail}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

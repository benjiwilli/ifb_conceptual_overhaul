"use client"

import Link from "next/link"

export default function ArticleTOC({
  headings,
}: {
  headings: { id: string; text: string; level: 2 | 3 }[]
}) {
  return (
    <nav aria-label="Table of contents" className="text-sm">
      <h2 className="text-xs uppercase tracking-[0.18em] text-sky-400/80 mb-3">On this page</h2>
      <ol className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-3" : ""}>
            <Link
              href={`#${h.id}`}
              className="text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(79%_0.17_234/0.7)] rounded"
            >
              {h.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

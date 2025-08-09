"use client"

import * as React from "react"
import { Copy } from "lucide-react"

export default function CodeBlock({
  code,
  language = "tsx",
}: {
  code: string
  language?: string
}) {
  const [copied, setCopied] = React.useState(false)
  async function onCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-surface shadow-inset">
      <div className="flex items-center justify-between border-b border-border/60 px-3 py-2 text-xs text-slate-400">
        <span className="uppercase tracking-wide">{language}</span>
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-slate-200 ring-1 ring-border hover:bg-background/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(79%_0.17_234/0.7)]"
          aria-live="polite"
        >
          <Copy className="size-3.5" /> {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-auto p-4 text-[13px] leading-6 text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  )
}

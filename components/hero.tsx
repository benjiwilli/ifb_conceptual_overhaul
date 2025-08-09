import Link from "next/link"

export default function Hero({
  title = "Design that gets out of the way.",
  subtitle = "A modern, minimal showcase and journal for It From Bit.",
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 40% at 30% 0%, rgba(64,160,255,0.35), transparent 60%), radial-gradient(60% 40% at 90% 20%, rgba(58,224,255,0.28), transparent 60%)",
        }}
      />
      <div className="relative container py-16 md:py-24">
        <h1 className="font-display text-5xl md:text-[64px] leading-[1.05] tracking-tight text-white max-w-[24ch]">
          {title}
        </h1>
        <p className="mt-4 text-slate-300 text-lg md:text-[18px] leading-[1.6] max-w-[65ch]">{subtitle}</p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/projects"
            className="rounded-full px-5 py-2.5 text-sm text-white focus:outline-none focus-visible:ring-2"
            style={{
              background: "linear-gradient(90deg, oklch(61% 0.22 262) 0%, oklch(79% 0.17 234) 100%)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 10px 30px -12px oklch(61% 0.22 262)",
            }}
          >
            View Work
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-border bg-transparent px-5 py-2.5 text-sm text-slate-100 hover:bg-surface/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(79%_0.17_234/0.7)]"
          >
            Read Journal
          </Link>
        </div>
      </div>
    </div>
  )
}

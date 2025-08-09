import type React from "react"
import { cn } from "@/lib/utils"

export default function Section({
  eyebrow,
  title,
  className = "",
  children,
}: {
  eyebrow?: string
  title?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={cn("container", className)}>
      {(eyebrow || title) && (
        <header>
          {eyebrow && <p className="text-xs uppercase tracking-[0.18em] text-sky-400/80">{eyebrow}</p>}
          {title && <h2 className="mt-2 font-display text-3xl md:text-[32px] text-white">{title}</h2>}
        </header>
      )}
      <div className="mt-6">{children}</div>
    </section>
  )
}

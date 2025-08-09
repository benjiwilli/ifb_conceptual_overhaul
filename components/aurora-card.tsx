import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function AuroraCard({
  href,
  className = "",
  children,
}: {
  href?: string
  className?: string
  children: React.ReactNode
}) {
  const Comp = href ? Link : "div"
  const props = href ? { href } : {}
  return (
    <Comp
      {...(props as any)}
      className={cn(
        "relative rounded-xl border border-border bg-[oklch(12%_0.02_260/0.6)] backdrop-blur-md shadow-inset overflow-hidden",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-24 opacity-25 blur-2xl"
        style={{
          background:
            "radial-gradient(40% 40% at 30% 20%, rgba(64,160,255,0.35), transparent 60%), radial-gradient(40% 40% at 80% 60%, rgba(58,224,255,0.28), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </Comp>
  )
}

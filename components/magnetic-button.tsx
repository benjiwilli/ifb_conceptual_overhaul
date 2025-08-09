"use client"

import Link from "next/link"
import * as React from "react"
import { cn } from "@/lib/utils"

export default function MagneticButton({
  href = "#",
  children,
  className = "",
  variant = "default",
}: {
  href?: string
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
}) {
  const [offset, setOffset] = React.useState({ x: 0, y: 0 })
  const ref = React.useRef<HTMLAnchorElement>(null)

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = e.clientX - (rect.left + rect.width / 2)
        const y = e.clientY - (rect.top + rect.height / 2)
        setOffset({ x: x * 0.15, y: y * 0.15 })
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm transition-[transform,background,box-shadow] will-change-transform",
        variant === "default" && "text-white",
        variant === "default" &&
          "bg-[linear-gradient(90deg,oklch(var(--brand-blue))_0%,oklch(var(--brand-cyan))_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_-12px_oklch(var(--brand-blue))]",
        variant === "outline" && "border border-neutral-800 text-neutral-200 hover:bg-neutral-900/60",
        className,
      )}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {children}
    </Link>
  )
}

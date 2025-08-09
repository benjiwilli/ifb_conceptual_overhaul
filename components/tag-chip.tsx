"use client"

import { cn } from "@/lib/utils"

export default function TagChip({
  label,
  active = false,
  onClick,
  className = "",
}: {
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-xs transition-colors",
        active
          ? "border-[oklch(79%_0.17_234/0.6)] bg-[oklch(12%_0.02_260/0.6)] text-white"
          : "border-border text-slate-300 hover:text-white hover:bg-surface/70",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(79%_0.17_234/0.7)]",
        className,
      )}
    >
      {label}
    </button>
  )
}

import type React from "react"
import { cn } from "@/lib/utils"

export default function Kbd({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <kbd
      className={cn(
        "rounded-md border border-border bg-surface px-1.5 py-0.5 text-[0.8em] text-slate-200 shadow-inset",
        className,
      )}
    >
      {children}
    </kbd>
  )
}

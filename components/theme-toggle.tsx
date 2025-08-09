"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Laptop } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const current = theme === "system" ? resolvedTheme : theme

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        aria-label="Light theme"
        className={cn(
          "rounded-full p-2 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900/60 ring-1 ring-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
          mounted && current === "light" && "text-neutral-100",
        )}
        onClick={() => setTheme("light")}
      >
        <Sun className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Dark theme"
        className={cn(
          "rounded-full p-2 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900/60 ring-1 ring-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
          mounted && current === "dark" && "text-neutral-100",
        )}
        onClick={() => setTheme("dark")}
      >
        <Moon className="size-4" />
      </button>
      <button
        type="button"
        aria-label="System theme"
        className={cn(
          "rounded-full p-2 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900/60 ring-1 ring-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
          mounted && theme === "system" && "text-neutral-100",
        )}
        onClick={() => setTheme("system")}
        title="System"
      >
        <Laptop className="size-4" />
      </button>
    </div>
  )
}

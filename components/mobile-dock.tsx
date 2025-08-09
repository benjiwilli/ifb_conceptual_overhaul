"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FolderGit2, PenSquare, MessageCircle, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/blog", label: "Blog", icon: PenSquare },
  { href: "/contact", label: "Contact", icon: MessageCircle },
] as const

export default function MobileDock() {
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <div className="fixed inset-x-3 bottom-3 z-50">
        <div className="relative rounded-2xl border border-neutral-800 bg-[rgba(10,11,15,0.7)] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.08] [background-image:radial-gradient(rgba(64,160,255,0.35)_1px,transparent_1px)] [background-size:8px_8px]"
          />
          <div className="relative grid grid-cols-5">
            {items.map(({ href, label, icon: Icon }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex flex-col items-center gap-1 px-2 py-2 text-xs",
                    "text-neutral-400 hover:text-neutral-100",
                  )}
                >
                  <Icon className={cn("size-5", active && "text-sky-400")} />
                  <span className={cn("leading-none", active && "text-sky-400")}>{label}</span>
                </Link>
              )
            })}
            <button
              aria-label="Open command"
              onClick={() => window.dispatchEvent(new Event("open-command"))}
              className="group -mt-6 mx-auto flex size-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,oklch(var(--brand-blue))_0%,oklch(var(--brand-cyan))_100%)] text-white ring-1 ring-white/10 shadow-[0_10px_30px_-12px_oklch(var(--brand-blue))]"
              title="Search (⌘K)"
            >
              <Search className="size-5 transition-transform group-active:scale-95" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

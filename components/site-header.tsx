"use client"
import Link from "next/link"
import Image from "next/image"
import ThemeToggle from "@/components/theme-toggle"
import { Search } from "lucide-react"

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[oklch(28%_0.02_260)]/70 bg-[oklch(12%_0.02_260/0.6)] backdrop-blur-md">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-4 py-3">
          <div className="col-span-6 md:col-span-3 flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(79%_0.17_234/0.7)] rounded-md"
            >
              <Image src="/images/logo.png" alt="It From Bit" width={28} height={28} className="rounded-sm" />
              <span className="font-display text-sm md:text-base text-white/90">It From Bit</span>
            </Link>
          </div>
          <nav className="col-span-0 md:col-span-6 hidden md:flex items-center justify-center gap-6 text-sm text-slate-300">
            <Link
              href="/projects"
              className="hover:text-white focus-visible:ring-2 focus-visible:ring-[oklch(79%_0.17_234/0.7)] rounded-md px-1 py-1"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="hover:text-white focus-visible:ring-2 focus-visible:ring-[oklch(79%_0.17_234/0.7)] rounded-md px-1 py-1"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="hover:text-white focus-visible:ring-2 focus-visible:ring-[oklch(79%_0.17_234/0.7)] rounded-md px-1 py-1"
            >
              About
            </Link>
          </nav>
          <div className="col-span-6 md:col-span-3 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-command"))}
              className="hidden sm:inline-flex rounded-full p-2 text-slate-300 hover:text-white ring-1 ring-border/70 hover:bg-surface/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(79%_0.17_234/0.7)]"
              title="Search (⌘K)"
              aria-label="Open command menu"
            >
              <Search className="size-4" />
            </button>
            <ThemeToggle className="hidden md:flex" />
            <Link
              href="/contact"
              className="rounded-full border border-border bg-transparent px-4 py-2 text-sm text-slate-100 hover:bg-surface/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(79%_0.17_234/0.7)]"
            >
              Contact
            </Link>
            <Link
              href="/projects"
              className="rounded-full px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2"
              style={{
                background: "linear-gradient(90deg, oklch(61% 0.22 262) 0%, oklch(79% 0.17 234) 100%)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 20px -8px oklch(61% 0.22 262)",
              }}
            >
              View Work
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader

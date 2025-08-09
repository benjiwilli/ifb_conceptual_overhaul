import Link from "next/link"
import { Github, Twitter, Mail } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(12%_0.02_260/0.6)]">
      <div className="container py-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <h4 className="font-display text-white/90">It From Bit</h4>
          <p className="mt-2 text-sm text-slate-400 max-w-[45ch]">
            Calm, crafted software and writing about clarity, performance, and design.
          </p>
        </div>
        <nav className="col-span-6 md:col-span-2">
          <h5 className="text-slate-300 text-sm">Project</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <Link className="hover:text-white" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="col-span-6 md:col-span-2">
          <h5 className="text-slate-300 text-sm">Resources</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <Link className="hover:text-white" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <a className="hover:text-white" href="mailto:hello@itfrombit.ca">
                Email
              </a>
            </li>
          </ul>
        </nav>
        <div className="col-span-12 md:col-span-4">
          <h5 className="text-slate-300 text-sm">Follow</h5>
          <div className="mt-3 flex gap-3 text-slate-300">
            <a href="#" className="hover:text-white" aria-label="GitHub">
              <Github className="size-5" />
            </a>
            <a href="#" className="hover:text-white" aria-label="Twitter">
              <Twitter className="size-5" />
            </a>
            <a href="/contact" className="hover:text-white" aria-label="Mail">
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 text-xs text-slate-500">
          © {new Date().getFullYear()} It From Bit. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

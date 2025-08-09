import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/data"

export default function ProjectCard({
  slug,
  title,
  summary,
  cover,
  tags = [],
  className = "",
}: Project & { className?: string }) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-[oklch(12%_0.02_260/0.6)] backdrop-blur-md shadow-inset transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={cover || "/images/placeholder.svg?height=720&width=1280&query=project%20cover"}
          alt=""
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="mt-2 text-slate-300 text-sm">{summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-border px-2 py-0.5 text-xs text-slate-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

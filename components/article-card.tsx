import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function ArticleCard({
  slug,
  title,
  excerpt,
  date,
  readingTime,
  cover,
  tags = [],
  className = "",
}: {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  cover: string
  tags?: string[]
  className?: string
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-[oklch(12%_0.02_260/0.6)] backdrop-blur-md shadow-inset transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative aspect-[16/9]">
        <Image
          src={cover || "/images/placeholder.svg?height=600&width=1200&query=article%20cover"}
          alt=""
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-xs text-slate-400">
          <time>{date}</time>
          <span className="mx-2">•</span>
          <span>{readingTime}</span>
        </div>
        <h3 className="mt-1 text-white font-medium">{title}</h3>
        <p className="mt-2 text-slate-300 text-sm">{excerpt}</p>
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

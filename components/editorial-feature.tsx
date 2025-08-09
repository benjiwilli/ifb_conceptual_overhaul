import Image from "next/image"
import AuroraCard from "@/components/aurora-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EditorialFeature({
  href = "/blog/ai-first-workflow",
  overline = "Featured",
  title = "An Interface That Gets Out of the Way",
  summary = "Exploring the quiet power of restraint and how it helps people think.",
  cover = "/images/screenshot-blog.png",
  cta = "Read article",
}: {
  href?: string
  overline?: string
  title?: string
  summary?: string
  cover?: string
  cta?: string
}) {
  return (
    <AuroraCard href={href} className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[260px]">
          <Image
            src={cover || "/placeholder.svg"}
            alt=""
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-sky-400/80">{overline}</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-50">{title}</h3>
          <p className="mt-3 text-neutral-400">{summary}</p>
          <div className="mt-6">
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md"
            >
              {cta} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </AuroraCard>
  )
}

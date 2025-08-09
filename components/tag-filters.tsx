"use client"
import TagChip from "@/components/tag-chip"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function TagFilters({ tags, scope = "home" }: { tags: string[]; scope?: "home" | "blog" }) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const selected = params.get("tag")

  function toggleTag(tag: string) {
    const next = selected === tag ? null : tag
    const query = next ? `?tag=${encodeURIComponent(next)}` : ""
    router.push(`${pathname}${query}`)
  }

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <TagChip key="all" label="All" active={!selected} onClick={() => toggleTag("")} />
      {tags.map((t) => (
        <TagChip key={`${scope}-${t}`} label={t} active={selected === t} onClick={() => toggleTag(t)} />
      ))}
    </div>
  )
}

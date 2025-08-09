import TagFilters from "@/components/tag-filters"
import ArticleCard from "@/components/article-card"
import Section from "@/components/section"
import { posts } from "@/lib/data"

export default function BlogIndex() {
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)))
  return (
    <div className="py-12 md:py-20">
      <Section eyebrow="Journal" title="All Articles" className="py-0">
        <TagFilters tags={allTags} scope="blog" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={new Date(post.date).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              readingTime={post.readingTime}
              cover={post.cover}
              tags={post.tags}
            />
          ))}
        </div>
      </Section>
    </div>
  )
}

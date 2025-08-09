import Hero from "@/components/hero"
import Section from "@/components/section"
import ProjectCard from "@/components/project-card"
import ArticleCard from "@/components/article-card"
import ScrollReveal from "@/components/scroll-reveal"
import FeatureRow from "@/components/feature-row"
import EditorialFeature from "@/components/editorial-feature"
import MagneticButton from "@/components/magnetic-button"
import TagFilters from "@/components/tag-filters"
import { projects, posts } from "@/lib/data"

export default function Page() {
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)))
  return (
    <div className="bg-neutral-950 text-neutral-100">
      <Hero
        title="Design that gets out of the way."
        subtitle="A modern, minimal showcase and journal for It From Bit."
      />
      <main id="main">
        <Section eyebrow="Principles" title="A Calm, Crafted System" className="py-16 md:py-24">
          <ScrollReveal>
            <FeatureRow />
          </ScrollReveal>
        </Section>

        <Section eyebrow="Spotlight" title="Featured" className="py-12 md:py-20">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-7">
              <ScrollReveal>
                <EditorialFeature
                  href={`/blog/${posts[0]?.slug || "ai-first-workflow"}`}
                  title={posts[0]?.title}
                  summary={posts[0]?.excerpt}
                  cover={posts[0]?.cover}
                  overline="From the Journal"
                  cta="Read article"
                />
              </ScrollReveal>
            </div>
            <div className="col-span-12 lg:col-span-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {projects.slice(0, 4).map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.06}>
                  <ProjectCard {...p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Latest" title="From the Journal" className="py-16 md:py-24">
          <TagFilters tags={allTags} />
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 6).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.05}>
                <ArticleCard
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
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8">
            <MagneticButton href="/blog" variant="outline">
              View all articles
            </MagneticButton>
          </div>
        </Section>
      </main>
    </div>
  )
}

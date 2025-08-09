import Image from "next/image"
import Link from "next/link"
import { posts } from "@/lib/data"
import ReadingProgress from "@/components/reading-progress"
import ArticleTOC from "@/components/article-toc"
import CodeBlock from "@/components/code-block"
import Kbd from "@/components/kbd"

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) {
    return (
      <div className="container py-24">
        <p className="text-slate-300">Article not found.</p>
        <Link href="/blog" className="text-accent underline">
          Back to blog
        </Link>
      </div>
    )
  }

  const headings = [
    { level: 2, text: "Why clarity feels fast" },
    { level: 2, text: "Principles" },
    { level: 3, text: "Restraint" },
    { level: 3, text: "Hierarchy" },
    { level: 2, text: "Implementation notes" },
  ].map((h) => ({ ...h, id: slugify(h.text) }))

  return (
    <>
      <ReadingProgress />
      <article className="container max-w-5xl py-12 md:py-20">
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full border border-border px-2 py-0.5">
                {t}
              </span>
            ))}
            <span className="mx-2">•</span>
            <time>{new Date(post.date).toLocaleDateString()}</time>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-white">{post.title}</h1>
        </header>

        <div className="grid grid-cols-12 gap-8">
          <aside className="hidden lg:block col-span-3">
            <div className="sticky top-24">
              <ArticleTOC headings={headings} />
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-9">
            <figure className="mb-8 overflow-hidden rounded-xl border border-border bg-surface">
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.cover || "/placeholder.svg"}
                  alt=""
                  fill
                  sizes="(max-width:768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-2 text-xs text-slate-400">Figure: context for the article</figcaption>
            </figure>

            <section id={headings[0].id} className="prose-invert prose prose-slate max-w-none">
              <p>
                Latency is experienced, not measured. The fastest feeling UI reduces uncertainty and keeps you in flow.
                Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to try search.
              </p>
              <p>
                Aim for a text width of 65–75ch and visible focus states to maintain rhythm and confidence as people
                move.
              </p>
            </section>

            <h2 id={headings[1].id} className="mt-12 text-2xl font-semibold">
              Principles
            </h2>
            <h3 id={headings[2].id} className="mt-6 text-xl font-semibold">
              Restraint
            </h3>
            <p className="text-slate-300">
              Typography first. Color accents only where they carry meaning. Shadows are soft and directional.
            </p>

            <h3 id={headings[3].id} className="mt-8 text-xl font-semibold">
              Hierarchy
            </h3>
            <p className="text-slate-300">Group related controls. Prefer progressive disclosure over modal overload.</p>

            <h2 id={headings[4].id} className="mt-12 text-2xl font-semibold">
              Implementation notes
            </h2>
            <CodeBlock
              language="tsx"
              code={`export function Button() {\n  return (\n    <button className="rounded-lg px-3 py-2 bg-[oklch(61%_0.22_262)] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(79%_0.17_234/0.7)]">Click</button>\n  )\n}`}
            />
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border">
          <h3 className="text-lg font-medium text-white/90">Related posts</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {posts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="text-accent hover:underline">
                  {p.title}
                </Link>
              ))}
          </div>
        </footer>
      </article>
    </>
  )
}

export type Project = {
  slug: string
  title: string
  summary: string
  cover: string
  tags: string[]
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string // ISO
  readingTime: string
  cover: string
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: "neon-interface",
    title: "Neon Interface",
    summary: "A minimal, electric UI with scanline textures and glass surfaces.",
    cover: "/images/placeholder.svg?height=720&width=1280&query=neon%20glassmorphism%20ui%20dashboard",
    tags: ["Design", "UI", "Next.js"],
  },
  {
    slug: "signal-processor",
    title: "Signal Processor",
    summary: "Real-time processing UI with sculpted gradients and motion.",
    cover: "/images/placeholder.svg?height=720&width=1280&query=real-time%20signal%20processing%20dashboard",
    tags: ["Data Viz", "Recharts", "UX"],
  },
  {
    slug: "iveminimalshowcase",
    title: "IVE Minimal Showcase",
    summary: "A calm portfolio framework tuned for clarity and speed.",
    cover: "/images/placeholder.svg?height=720&width=1280&query=minimal%20portfolio%20grid%20dark%20aesthetic",
    tags: ["Portfolio", "Performance", "Accessibility"],
  },
]

export const posts: Post[] = [
  {
    slug: "ai-first-workflow",
    title: "AI‑First Workflow: Designing for Focus",
    excerpt: "A practical approach to building interfaces that recede and help people think faster.",
    date: new Date().toISOString(),
    readingTime: "6 min",
    cover: "/images/screenshot-blog.png",
    tags: ["AI", "Essays", "Design"],
  },
  {
    slug: "calm-interfaces",
    title: "Calm Interfaces and Quiet Detail",
    excerpt: "How restraint, hierarchy, and rhythm reduce cognitive load.",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
    readingTime: "5 min",
    cover: "/images/placeholder.svg?height=600&width=1200&query=calm%20interface%20dark%20minimal%20ui",
    tags: ["Essays", "UX"],
  },
  {
    slug: "shapes-of-speed",
    title: "The Shapes of Speed in UI",
    excerpt: "Latency isn’t just numbers; it’s perceived pace and certainty.",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(),
    readingTime: "7 min",
    cover: "/images/placeholder.svg?height=600&width=1200&query=performance%20perception%20speed%20ui",
    tags: ["Performance", "Essays"],
  },
  {
    slug: "tokenomics-visual",
    title: "Visual Tokenomics: Explaining Flow and Risk",
    excerpt: "Patterns for showing capital movement, emissions, and vesting at a glance.",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 21).toISOString(),
    readingTime: "8 min",
    cover: "/images/placeholder.svg?height=600&width=1200&query=tokenomics%20diagram%20dark",
    tags: ["Tokenomics", "Finance"],
  },
  {
    slug: "edge-defense-ux",
    title: "Interfaces for Edge & Defense",
    excerpt: "Designing for high-stakes systems: clarity, certainty, and failure modes.",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 28).toISOString(),
    readingTime: "9 min",
    cover: "/images/placeholder.svg?height=600&width=1200&query=defense%20systems%20interface",
    tags: ["Defense", "UX"],
  },
]

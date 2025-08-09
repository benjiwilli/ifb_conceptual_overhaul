# It From Bit — Frontend

Modern dark-first showcase/blog built with Next.js App Router and Tailwind.

- Palette: background #0B1120, surface #0E1624, primary #2563EB, accent #29B6FF, neutrals via slate.
- Type: Space Grotesk (display), Inter (body). Width ~65–75ch, visible focus rings.
- Radius: 12–16px. Soft shadows and hover “lift”.

## Structure

- app/page.tsx — Home: hero, featured (1XL + 4), latest posts with tag filters.
- app/blog/page.tsx — Blog index: card grid with tags/date/read-time.
- app/blog/[slug]/page.tsx — Article template with sticky TOC, reading progress, code blocks with copy, figure captions and related posts.
- components/* — Header, footer, cards, search (⌘K), tag chips, code block, etc.
- lib/data.tsx — Mock posts and projects.

## MDX/Content

Use `lib/data.tsx` to add posts and projects. For MDX posts later:
- Add a loader for MDX or convert content to components and pass as sections.
- The included `CodeBlock`, `Kbd`, and `ArticleTOC` are ready to use.

## Theming & Tokens

Tokens live in tailwind.config.ts and globals.css:
- Colors: background, surface, primary (blue), accent (cyan), border/input/popover/muted.
- Shadows: `shadow-soft`, `hover:shadow-lift`, plus `shadow-inset`.
- Fonts: Space Grotesk (`--font-space-grotesk`) and Inter (`--font-inter`).

Change colors/type by editing:
- tailwind.config.ts (hardcoded OKLCH colors)
- app/layout.tsx (fonts via next/font)

## Accessibility & Quality

- Keyboard accessible; visible focus rings.
- No nested anchors; cards use a single outer Link.
- next/image for media; hero uses CSS gradient for LCP.
- Small fades/reveals with Framer Motion only.

## Extending

- Add filter tags in `lib/data.tsx`.
- Add new sections/cards by composing `Section`, `ProjectCard`, `ArticleCard`.
- Customize the Search modal in `components/command-menu.tsx`.

</README.md>

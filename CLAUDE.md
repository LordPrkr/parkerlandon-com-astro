# parkerlandon.com

Astro 5 personal site + blog.

## Commands

- **Package manager:** `bun`
- **Build:** `bun run build`
- **Dev:** `bun run dev`

## Key Conventions

- Path alias: `@/` → `src/`
- Styling: Tailwind v3 + `cn()` from `@/lib/utils`
- UI primitives: shadcn/ui in `src/components/ui/` — use CLI to add, don't hand-write
- Dark mode: `class` strategy

## Deep Dives

- [Conventions](.claude/docs/conventions.md) — naming, imports, exports
- [Content](.claude/docs/content.md) — MDX posts, content collections, portfolio data
- [Architecture](.claude/docs/architecture.md) — layouts, pages, component structure

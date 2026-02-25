# parkerlandon.com

Astro 5 personal site + blog.

## Commands

- **Package manager:** `bun`
- **Build:** `bun run build`
- **Dev:** `bun run dev`

## Must Follow

- Run `bun format` and `bun lint` when finished with a task.
- Fix all lint errors before commit.
- Always use `bun run <script>` — never npx, npm, or bunx. Add missing scripts to package.json if needed.

## Key Conventions

- Path alias: `@/` → `src/`
- Styling: Tailwind v3 + `cn()` from `@/lib/utils`
- UI primitives: shadcn/ui in `src/components/ui/` — use CLI to add, don't hand-write
- Dark mode: `class` strategy

## Deep Dives

- [Conventions](.claude/docs/conventions.md) — naming, imports, exports
- [Content](.claude/docs/content.md) — MDX posts, content collections, portfolio data
- [Architecture](.claude/docs/architecture.md) — layouts, pages, component structure

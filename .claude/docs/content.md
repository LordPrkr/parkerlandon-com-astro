# Content

## Blog Posts
- MDX files in `src/content/posts/`
- Schema defined in `src/content.config.ts` (Astro 5 content layer API, NOT legacy `config.ts`)

## Frontmatter Shape
- `title` — post title
- `keywords` — comma-separated topics
- `description` — short summary
- `url` — canonical URL
- `ogImageUrl` — social image
- `postnum` — sort order (coerced string)

## Portfolio
- Hardcoded in `src/lib/portfolio.ts` (not a content collection)

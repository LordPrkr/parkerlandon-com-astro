# Architecture

## Layouts
- `BaseLayout.astro` — root layout, wraps header + footer
- `MdxLayout.astro` — extends BaseLayout, adds article wrapper + title

## Page Patterns
- Content pages → `MdxLayout`
- List pages → `BaseLayout` + React components with `client:load`
- `[slug].astro` → `getStaticPaths` + MDX component overrides

## Theming
- CSS vars defined in `globals.css`
- Brand highlight: `#b626a5`
- Custom fonts via CSS vars in Tailwind config
- Custom breakpoint: `xs: 475px`
- Dark mode: `class` strategy

# Conventions

## File Naming
- React components: `kebab-case.tsx`
- Astro pages/layouts: `PascalCase.astro`

## Props
- Define `interface FooProps` or `type FooProps` inline above the component

## Exports
- Default export for most components
- Named exports for ui primitives + typography

## Imports
- `import type` for type-only imports
- `@/` alias for cross-directory imports
- Relative paths for sibling imports

## Types
- Shared types live in `src/lib/types/`

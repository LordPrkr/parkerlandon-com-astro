# parkerlandon.com

Parker Landon's personal portfolio and blog, built with [Astro](https://astro.build).

## Stack

- **Astro 5** — static site generation
- **React** — interactive components (dialogs, navigation, embeds)
- **Tailwind CSS 3** — styling
- **MDX** — blog posts via content collections
- **rehype-pretty-code** / **rehype-katex** — syntax highlighting and math rendering

## Commands

| Command        | Action                                 |
| :------------- | :------------------------------------- |
| `bun install`  | Install dependencies                   |
| `bun dev`      | Start dev server at `localhost:4321`   |
| `bun build`    | Build production site to `./dist/`     |
| `bun preview`  | Preview production build locally       |

## Project Structure

```
src/
├── components/     # React UI components (shadcn/ui, typography, portfolio, posts)
├── content/posts/  # MDX blog posts (content collection)
├── layouts/        # Astro layouts (BaseLayout, MdxLayout)
├── lib/            # Shared utilities, types, data
├── pages/          # Astro pages (index, about, portfolio, posts)
└── styles/         # Global CSS (Tailwind + CSS variables)
```

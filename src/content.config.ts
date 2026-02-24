import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    keywords: z.string().optional(),
    description: z.string().optional(),
    url: z.string().optional(),
    ogImageUrl: z.string().optional(),
    ogImageWidth: z.string().optional(),
    ogImageHeight: z.string().optional(),
    postnum: z.coerce.string(),
  }),
});

export const collections = { posts };

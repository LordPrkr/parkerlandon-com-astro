// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: 'one-dark-pro',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://parkerlandon.com',
  integrations: [react(), sitemap(), mdx()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions], rehypeKatex],
    syntaxHighlight: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

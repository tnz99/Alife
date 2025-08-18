// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://tnz99.github.io/blog',
	base: '/blog/',
	integrations: [mdx(), sitemap()],
});

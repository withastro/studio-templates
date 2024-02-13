import db, { NOW, defineCollection, field } from '@astrojs/db';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import seed from './studio.seed.ts';

export const Blog = defineCollection({
	fields: {
		title: field.text(),
		description: field.text(),
		slug: field.text({ optional: true }),
		publishedAt: field.date({ default: NOW }),
		updatedAt: field.date({ optional: true }),
		heroImage: field.text({
			default: '/blog-placeholder-1.jpg',
		}),
		content: field.text({ multiline: true }),
	},
});

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [db(), sitemap()],
	db: {
		studio: true,
		collections: {
			Blog,
		},
		data: seed,
	},
});

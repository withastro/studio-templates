import sitemap from '@astrojs/sitemap';
import { defineConfig, field } from 'studio-private-beta';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [sitemap()],
	studio: {
		collections: {
			Blog: {
				fields: {
					title: field.text(),
					description: field.text(),
					slug: field.text({ optional: true }),
					publishedAt: field.date({ default: 'now' }),
					updatedAt: field.date({ optional: true }),
					heroImage: field.text({
						default: '/blog-placeholder-1.jpg',
					}),
					content: field.text({ multiline: true }),
				},
			},
		},
	},
});

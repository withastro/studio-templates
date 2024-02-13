import db from '@astrojs/db';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [db()],
	db: {
		studio: true,
		collections: {
			// define your collections here!
		},
	},
});

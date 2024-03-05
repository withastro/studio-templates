import { Blog } from './collections';
import { defineDB } from 'astro:db';

export default defineDB({
	tables: {
		Blog,
	},
});

import { Signup } from './collections';
import { defineDB } from 'astro:db';

export default defineDB({
	tables: {
		Signup,
	},
});

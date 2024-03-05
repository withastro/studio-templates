import { column, defineTable } from 'astro:db';

export const Signup = defineTable({
	columns: {
		email: column.text({ unique: true }),
	},
});

import { column, defineDb, defineTable } from 'astro:db';

export const Signup = defineTable({
	columns: {
		email: column.text({ unique: true }),
	},
});

// https://astro.build/db/config
export default defineDb({
	tables: {
		Signup,
	},
});

import { defineDB, defineTable, column } from 'astro:db';

export const Signup = defineTable({
	columns: {
		email: column.text({ unique: true }),
	},
});

// https://astro.build/db/config
export default defineDB({
	tables: {
		Signup,
	},
});

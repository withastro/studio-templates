import { defineTable, column } from "astro:db";

export const Signup = defineTable({
	columns: {
		email: column.text({ unique: true }),
	},
});

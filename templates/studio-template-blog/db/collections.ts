import { defineTable, column, NOW } from "astro:db";

export const Blog = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text(),
		description: column.text(),
		slug: column.text({ optional: true }),
		publishedAt: column.date({ default: NOW }),
		updatedAt: column.date({ optional: true }),
		heroImage: column.text({
			default: "/blog-placeholder-1.jpg",
		}),
		content: column.text({ multiline: true }),
	},
});

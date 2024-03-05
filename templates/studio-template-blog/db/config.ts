import { defineDB } from "astro:db";
import { Blog } from "./collections";

export default defineDB({
	tables: {
		Blog,
	},
});

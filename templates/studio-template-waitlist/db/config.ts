import { defineDB } from "astro:db";
import { Signup } from "./collections";

export default defineDB({
	tables: {
		Signup,
	},
});

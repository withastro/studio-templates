import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import node from "@astrojs/node";

export default defineConfig({
	integrations: [
		db(),
		tailwind({
			nesting: true,
		}),
	],
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
});

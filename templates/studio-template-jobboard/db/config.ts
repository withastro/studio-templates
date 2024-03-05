import { defineDB } from "astro:db";
import { Company, JobPosting, JobType } from "./collections";

export default defineDB({
	tables: {
		JobPosting,
		Company,
		JobType,
	},
});

import { Company, JobPosting, JobType } from './collections';
import { defineDB } from 'astro:db';

export default defineDB({
	tables: {
		JobPosting,
		Company,
		JobType,
	},
});

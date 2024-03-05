import { Signup, db } from 'astro:db';

await db
	.insert(Signup)
	.values([
		{ email: 'hello@elian.codes' },
		{ email: 'fred@astro.build' },
		{ email: 'ben@astro.build' },
	]);

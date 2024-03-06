import { Signup, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Signup).values([{ email: 'houston@astro.build' }]);
}

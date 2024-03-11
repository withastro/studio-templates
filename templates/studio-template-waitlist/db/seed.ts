import { Signup, db } from 'astro:db';

export default async function seed() {
	await db.insert(Signup).values([{ email: 'houston@astro.build' }]);
}

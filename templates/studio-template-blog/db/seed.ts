import { Blog, db } from 'astro:db';

const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default async function seed() {
	await db.insert(Blog).values([
		{
			title: 'First post',
			description: 'Lorem ipsum dolor sit amet',
			publishedAt: new Date('2022-07-08'),
			heroImage: '/blog-placeholder-3.jpg',
			content: LOREM_IPSUM,
		},
		{
			title: 'Second post',
			description: 'Lorem ipsum dolor sit amet',
			publishedAt: new Date('2022-07-15'),
			heroImage: '/blog-placeholder-4.jpg',
			content: LOREM_IPSUM,
		},
		{
			title: 'Third post',
			description: 'Lorem ipsum dolor sit amet',
			publishedAt: new Date('2022-07-22'),
			heroImage: '/blog-placeholder-2.jpg',
			content: LOREM_IPSUM,
		},
	]);
}
import { readFile } from 'node:fs/promises';
import { defineData } from '@astrojs/db';
import { Blog } from './astro.config.mjs';

export default defineData(async ({ seed }) => {
	const lipsum = await readFile(new URL('assets/lipsum.md', import.meta.url), 'utf8');

	const markdownStyleGuide = await readFile(
		new URL('assets/markdown-style-guide.md', import.meta.url),
		'utf8',
	);

	await seed(Blog, [
		{
			title: 'Markdown Style Guide',
			description:
				'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.',
			slug: 'markdown-style-guide',
			publishedAt: new Date('2022-07-01'),
			heroImage: '/blog-placeholder-1.jpg',
			content: markdownStyleGuide,
		},
		{
			title: 'First post',
			description: 'Lorem ipsum dolor sit amet',
			publishedAt: new Date('2022-07-08'),
			heroImage: '/blog-placeholder-3.jpg',
			content: lipsum,
		},
		{
			title: 'Second post',
			description: 'Lorem ipsum dolor sit amet',
			publishedAt: new Date('2022-07-15'),
			heroImage: '/blog-placeholder-4.jpg',
			content: lipsum,
		},
		{
			title: 'Third post',
			description: 'Lorem ipsum dolor sit amet',
			publishedAt: new Date('2022-07-22'),
			heroImage: '/blog-placeholder-2.jpg',
			content: lipsum,
		},
	])
})

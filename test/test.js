import assert from 'node:assert';
import { existsSync, readdirSync } from 'node:fs';
import { describe, it } from 'node:test';
import { build, dev } from 'astro';

const templatesDir = './templates/';
const templates = readdirSync(templatesDir);

for (const template of templates) {
	describe(template, () => {
		const root = templatesDir + template;

		it('builds successfully', async () => {
			await build({ root, logLevel: 'silent' });
			assert.ok(
				existsSync(`${root}/dist`),
				`Expected "dist/" directory for template "${template}", but found none.`,
			);
		});

		it('runs the dev server successfully', async () => {
			const server = await dev({ root, logLevel: 'silent' });
			const res = await fetch(`http://localhost:${server.address.port}/`);
			assert.strictEqual(
				res.status,
				200,
				`Expected dev server to respond with a 200 status code. Received ${res.status}.`,
			);
			await server.stop();
		});
	});
}

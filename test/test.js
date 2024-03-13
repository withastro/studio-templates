// @ts-check

import { build, dev } from 'astro';
import assert from 'node:assert';
import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';

const templatesDir = join(fileURLToPath(import.meta.url), '../../templates');

for (const template of await readdir(templatesDir)) {
	describe(template, () => {
		const root = join(templatesDir, template);

		it('builds successfully', async () => {
			await build({ root, logLevel: 'error' });
			const distDir = join(root, 'dist');
			assert.ok(
				existsSync(distDir),
				`Expected "dist" directory for template "${template}", but ${distDir} does not exist.`,
			);
		});

		it('runs the dev server successfully', async () => {
			const server = await dev({ root, logLevel: 'error' });
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

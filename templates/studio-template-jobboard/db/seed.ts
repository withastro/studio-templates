import { Company, JobPosting, JobType, db } from 'astro:db';

export default async function seed() {
	const companies = await db
		.insert(Company)
		.values([
			{
				title: 'Astro',
				description: 'Open-source website framework with a focus on content',
				logo: 'https://pbs.twimg.com/profile_images/1632785343433908224/SnMGR19O_400x400.png',
			},
			{
				title: 'Meta',
				description:
					'Meta is a company that is focused on building the metaverse and other buzzwords',
				logo: 'https://pbs.twimg.com/profile_images/1453818753880190978/HqrrEcrI_400x400.png',
			},
			{
				title: 'Slack',
				description: 'Workspace application',
				logo: 'https://pbs.twimg.com/profile_images/1461144163789983748/N5iAWd2d_400x400.jpg',
			},
		])
		.returning();

	const jobtypes = await db
		.insert(JobType)
		.values([
			{
				title: 'Full-time',
				value: 'full-time',
			},
			{
				title: 'Half-time',
				value: 'half-time',
			},
			{
				title: 'Contract',
				value: 'contract',
			},
			{
				title: 'Internship',
				value: 'internship',
			},
		])
		.returning();

	await db.insert(JobPosting).values([
		{
			title: 'Senior UX Writer',
			companyId: companies[0].id,
			description: 'Open-source website framework with a focus on content',
			type: jobtypes[0].id,
			location: 'New York, NY',
			posted: new Date('2022-12-13'),
			richText: `<h2>About the role</h2>
			<p>
				As the first Product Design hire at PermitFlow, you will work with the
				CTO and engineering team to lead and execute design and strategy of
				PermitFlow's product experience. We are the leading construction permit
				application software for builders. Our current team consists of
				engineers from Uber, Amazon, Stripe, NerdWallet, Harvard, Stanford, and
				more.
			</p>`,
		},
		{
			title: 'Junior whatever',
			companyId: companies[2].id,
			description: 'Workspace application',
			type: jobtypes[1].id,
			location: 'Remote',
			posted: new Date('2021-12-13'),
			richText: `<h2>About the role</h2>
		<p>
			As the first Product Design hire at PermitFlow, you will work with the
			CTO and engineering team to lead and execute design and strategy of
			PermitFlow's product experience. We are the leading construction permit
			application software for builders. Our current team consists of
			engineers from Uber, Amazon, Stripe, NerdWallet, Harvard, Stanford, and
			more.
		</p>`,
		},
		{
			title: 'Amazing role',
			companyId: companies[1].id,
			description: 'Building a new meta-verse or whatever other buzzword',
			type: jobtypes[0].id,
			location: 'Ghent, Belgium',
			posted: new Date('12/13/2020'),
			richText: `<h2>About the role</h2>
		<p>
			As the first Amazing Role  hire at meta, you will work with the
			CTO and engineering team to lead and execute design and strategy of
			PermitFlow's product experience. We are the leading construction permit
			application software for builders. Our current team consists of
			engineers from Uber, Amazon, Stripe, NerdWallet, Harvard, Stanford, and
			more.
		</p>`,
		},
		{
			title: 'Remote Assistant',
			companyId: companies[0].id,
			description: 'Open-source website framework with a focus on content',
			type: jobtypes[2].id,
			location: 'Remote',
			posted: new Date('2019-12-13'),
			richText: `<h2>About the role</h2>
			<p>
				As a remote assistant, you will work with the CTO and engineering team to
				lead and execute design and strategy of PermitFlow's product experience.
				We are the leading construction permit application software for builders.
				Our current team consists of engineers from Uber, Amazon, Stripe,
				NerdWallet, Harvard, Stanford, and more.
			</p>`,
		},
	]);
}

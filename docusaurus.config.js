// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {
	themes as prismThemes
} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Fapiao for BTC',
	tagline: 'Let Bitcoin Complete Smart Contracts',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://fapiao.org',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'fapiao.org', // Usually your GitHub org/user name.
	projectName: 'Fapiao', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".

	presets: [
		[
			'@docusaurus/preset-classic',
			({
				docs: {
					path: 'docs/en',
					routeBasePath: '/',
					sidebarPath: './sidebars.js',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
				},
				blog: false,
				theme: {
					customCss: './src/css/custom.css',
				},
			})
		],
	],
	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'zh-CN',
				path: 'docs/zh-CN',
				routeBasePath: 'zh-CN',
				sidebarPath: './sidebars.js',
				// ... other options
			},
		],
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				title: 'Fapiao',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'docsVersion',
						position: 'left',
						to: '/help',
						label: 'Docs',
					},
					{
						type: 'docsVersion',
						position: 'left',
						to: 'zh-CN/help',
						label: '中文文档',
					},
					{
						href: 'https://github.com/Fapiao-BTC',
						label: 'GitHub',
						position: 'right',
					}
				],
			},
			footer: {
				style: 'dark',
				links: [{
						title: 'Docs',
						items: [{
							label: 'Help Docs',
							to: '/help',
						}, ],
					},
					{
						title: 'Community',
						items: [{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/docusaurus',
							},
						],
					},
					{
						title: 'More',
						items: [{
							label: 'GitHub',
							href: 'https://github.com/Fapiao-BTC',
						}, ],
					},
				],
				copyright: `© ${new Date().getFullYear()} Fapiao, Inc.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
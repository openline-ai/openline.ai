// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsDark');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Openline',
  tagline: 'Eliminate customer data sprawl',
  url: 'https://openline.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'openline-ai', // Usually your GitHub org/user name.
  projectName: 'openline-customer-os', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./nav/_referenceSidebars.js'),
          breadcrumbs: false,
          //sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/openline-ai/docs-site/issues/new',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Openline',
        logo: {
          alt: 'Openline Logo',
          href: 'https://openline.ai',
          target: '_self',
          src: 'img/teamLogo.png',
          srcDark: 'img/OpenlineLogo.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'reference/intro',
            position: 'left',
            label: 'Reference',
          },
          {
            href: 'https://github.com/openline-ai',
            title: 'GitHub',
            position: 'right',
            label: 'GitHub',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/openline',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/openline-ai/shared_invite/zt-1i6umaw6c-aaap4VwvGHeoJ1zz~ngCKQ',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/openlineAI',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/openline-ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Openline Technologies, Inc. Built with ❤️ by the Openline community.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

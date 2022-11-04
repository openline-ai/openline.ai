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
          routeBasePath: '/',
          sidebarPath: require.resolve('./nav/_sidebars.js'),
          breadcrumbs: false,
          sidebarCollapsible: true,
          editUrl:
            'https://github.com/openline-ai/docs-site/issues/new',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/openline-ai/docs-site/issues/new',
        },
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
          href: '/',
          target: '_self',
          src: 'img/OpenlineLogoLightMode.svg',
          srcDark: 'img/OpenlineLogoDarkMode.svg'
        },
        items: [
          {
            to: 'pricing',
            label: 'Pricing',
            position: 'left',
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Community',
            items: [
              {
                to: 'blog',
                label: 'Blog',
              },
              {
                href: 'https://join.slack.com/t/openline-ai/shared_invite/zt-1i6umaw6c-aaap4VwvGHeoJ1zz~ngCKQ',
                title: 'Slack',
                label: 'Join our Slack',
              },
            ]
          },
          {
            to: 'team',
            label: 'Team',
            position: 'left',
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
                to: '/getting-started',
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
                label: 'GitHub',
                href: 'https://github.com/openline-ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Openline Technologies, Inc.   Built with ❤️ by the Openline community.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

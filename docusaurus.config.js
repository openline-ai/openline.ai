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
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./nav/_sidebars.js'),
          breadcrumbs: false,
          sidebarCollapsible: true,
          editUrl:
            'https://github.com/openline-ai/openline.ai/blob/otter',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/openline-ai/openline.ai/blob/otter',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'playbook',
        path: 'playbook',
        routeBasePath: 'playbook',
        sidebarCollapsible: true,
        sidebarPath: require.resolve('./nav/_sidebarsPlaybook.js'),
        editUrl:
          'https://github.com/openline-ai/openline.ai/blob/otter',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'legal',
        path: 'legal',
        routeBasePath: 'legal',
        sidebarCollapsible: true,
        sidebarPath: require.resolve('./nav/_sidebarsLegal.js'),
        // ... other options
      },
    ],
    ['@docusaurus/plugin-ideal-image',
      {}  
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
            type: 'dropdown',
            position: 'left',
            label: 'Developers',
            items: [
              {
                to: 'docs',
                label: 'Guides',
              },
              {
                to: 'docs/reference',
                label: 'API reference',
              },
              {
                to: 'docs/contribute',
                label: 'Community contributions'
              }
            ]
          },
          {
            to: 'pricing',
            label: 'Pricing',
            position: 'left',
          },
          {
            to: 'blog',
            label: 'Blog',
          },
          {
            type: 'dropdown',
            position: 'right',
            label: 'About Us',
            items: [
              {
                to: 'team',
                label: 'Team',
              },
              {
                to: 'playbook',
                label: 'Playbook',
              },
            ]
          },
          {
            href: 'https://join.slack.com/t/openline-ai/shared_invite/zt-1i6umaw6c-aaap4VwvGHeoJ1zz~ngCKQ',
            title: 'Slack',
            label: 'Join our Slack',
            position: 'right',
          },
          {
            type: 'html',
            position: 'right',
            value: '<div class="github-container"><iframe src="https://ghbtns.com/github-btn.html?user=openline-ai&repo=openline-customer-os&type=star&count=true&size=small" width="100" height="20" title="GitHub"></iframe></div>',
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
                to: 'docs/getting-started',
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
              {
                label: 'Legal',
                href: '/legal',
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

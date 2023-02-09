// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

const lightCodeTheme = require('prism-react-renderer/themes/vsDark');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Openline',
  tagline: 'Eliminate customer data sprawl',
  url: 'https://www.openline.ai',
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

  scripts: [{src: '/stats/js/script.js', defer: true, 'data-api': '/stats/api/event', 'data-domain': 'openline.ai'}],

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
    'docusaurus-node-polyfills',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/OpenlineSocialShare.png',
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
          // {
          //   type: 'dropdown',
          //   position: 'left',
          //   label: 'Products',
          //   items: [
          //     {
          //       to: 'products/customer-os',
          //       label: 'customerOS',
          //     },
          //     {
          //       to: 'products/contacts',
          //       label: 'Contacts',
          //     },
          //   ]
          // },
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
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://spaces.openline.ai/login" class="button-18" style="text-decoration:none;">Login</a>',
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
                label: 'Getting Started',
                to: 'docs',
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
  customFields: {
    'REACT_APP_SP_API_KEY': process.env.REACT_APP_SP_API_KEY,
    'REACT_APP_SP_HTTP_PATH': process.env.REACT_APP_SP_HTTP_PATH,
    'REACT_APP_SP_WS_PATH': process.env.REACT_APP_SP_WS_PATH,
    'REACT_APP_SP_TRACKER_ENABLED': process.env.REACT_APP_SP_TRACKER_ENABLED,
    'REACT_APP_SP_TRACKER_COLLECTOR_URL': process.env.REACT_APP_SP_TRACKER_COLLECTOR_URL,
    'REACT_APP_SP_TRACKER_APP_ID': process.env.REACT_APP_SP_TRACKER_APP_ID,
    'REACT_APP_SP_TRACKER_TRACKER_ID': process.env.REACT_APP_SP_TRACKER_TRACKER_ID,
    'REACT_APP_SP_TRACKER_BUFFER_SIZE': process.env.REACT_APP_SP_TRACKER_BUFFER_SIZE,
    'REACT_APP_SP_TRACKER_MIN_VISIT_SECONDS': process.env.REACT_APP_SP_TRACKER_MIN_VISIT_SECONDS,
    'REACT_APP_SP_TRACKER_HEARTBEAT_SECONDS': process.env.REACT_APP_SP_TRACKER_HEARTBEAT_SECONDS,
  },
};

module.exports = config;

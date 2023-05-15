// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

const lightCodeTheme = require('prism-react-renderer/themes/vsDark');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Openline',
  tagline: 'Eliminate customer data sprawl',
  url: 'https://www.getopenline.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

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

  scripts: [{src: '/stats/js/script.js', defer: true, 'data-api': '/stats/api/event', 'data-domain': 'getopenline.com'}],

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
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      './plugins/blog-plugin',
      {
        id: 'blog',
        routeBasePath: 'blog',
        path: 'blog',
        showReadingTime: true,
        editUrl:
          'https://github.com/openline-ai/openline.ai/blob/otter',
      },
    ],
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
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarCollapsible: true,
        sidebarPath: require.resolve('./nav/_sidebarsGuides.js'),
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
      announcementBar: {
        id: 'notion_cloud_challengers_report',
        content:
          '💥 <b>Boom!</b> Openline takes the #1 spot for early-stage cloud SaaS startups in Europe. <a target="_blank" rel="noopener noreferrer" href="https://www.notion.vc/cloud-challengers-2023/introduction">Check out the report.</a>',
        backgroundColor: '#E7F2FF',
        textColor: '#091E42',
        isCloseable: false,
      },
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
            to: 'guides',
            label: 'Guides',
            position: 'left',
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Developers',
            items: [
              {
                to: 'docs',
                label: 'Getting Started',
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
            type: 'html',
            position: 'right',
            value: '<a href="https://join.slack.com/t/openline-ai/shared_invite/zt-1i6umaw6c-aaap4VwvGHeoJ1zz~ngCKQ"><img src="/img/slackButton.webp" alt="Join our Slack" class="slack-button" target=”_blank”></img></a>',
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://spaces.getopenline.com/login?return_to=https://spaces.getopenline.com" class="button-18" style="text-decoration:none;">Login</a>',
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
              {
                label: 'GitHub',
                href: 'https://github.com/openline-ai',
              },
            ],
          },
          {
            title: 'Community',
            items: [
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
                label: 'Careers',
                href: '/careers',
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
    'REACT_APP_SLACK_WEBHOOK': process.env.REACT_APP_SLACK_WEBHOOK,
  },
};

module.exports = config;

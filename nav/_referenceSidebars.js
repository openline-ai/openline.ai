const sidebars = {
    guides: [
      {
        type: 'link',
        label: 'Home',
        href: '/'
      },
      {
        type: 'doc',
        id: 'getting-started',
        label: 'Getting started'
      },
      {
        type: 'category',
        label: 'Overview',
        collapsed: true,
        items: ['guides/why-openline', 'guides/architecture'],
      },
      {
        type: 'category',
        label: 'customerOS',
        collapsed: true,
        items: [
          'guides/customer-os-overview',
          'guides/customer-os-self-hosted'
        ],
      },
    ],
  }
  
  module.exports = sidebars
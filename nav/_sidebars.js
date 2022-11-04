const guides = [
      {
        type: 'doc',
        id: 'index'
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
    ]

  const reference = [
      {
        type: 'doc',
        label: 'Introduction',
        id: 'reference/index'
      },
      {
        type: 'doc',
        id: 'reference/intro',
        label: 'Getting started'
      },
    ]

  
  module.exports = {
    guides,
    reference
  }
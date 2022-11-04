const guides = [
      {
        type: 'doc',
        id: 'index'
      },
      {
        type: 'doc',
        id: 'getting-started',
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
      {
        type: 'category',
        label: 'Data pipelines',
        collapsed: true,
        items: [
          'guides/data-pipelines-overview',
        ],
      },
      {
        type: 'category',
        label: 'Components',
        collapsed: true,
        items: [
          'guides/components-overview',
        ],
      },
      {
        type: 'category',
        label: 'Contacts',
        collapsed: true,
        items: [
          'guides/contacts-overview',
        ],
      },
      {
        type: 'category',
        label: 'Oasis',
        collapsed: true,
        items: [
          'guides/oasis-overview',
        ],
      },
    ]

  const reference = [
      {
        type: 'doc',
        id: 'reference/index'
      },
      {
        type: 'doc',
        id: 'reference/intro',
      },
    ]

    const contribute = [
      {
        type: 'doc',
        id: 'contribute/index'
      },
      {
        type: 'doc',
        id: 'contribute/how-to-contribute',
      },
    ]

  
  module.exports = {
    guides,
    reference,
    contribute
  }
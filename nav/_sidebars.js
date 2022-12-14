const guides = [
  {
    type: 'doc',
    id: 'index'
  },
  {
    type: 'category',
    label: 'customerOS',
    collapsed: true,
    items: [
      'guides/installing-customer-os',
      'guides/uninstalling-customer-os'
    ],
  },
  {
    type: 'category',
    label: 'Connectors',
    collapsed: true,
    items: [
      'guides/connectors-catalog',
      'guides/snowplow',
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
  {
    type: 'category',
    label: 'Openline CLI',
    collapsed: true,
    items: [
      'guides/cli-overview',
      'guides/cli-openline-dev'
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
    id: 'contribute/how-to-contribute'
  },
  {
    type: 'category',
    label: 'Community guidelines',
    collapsed: true,
    items: [
      'contribute/code-of-conduct',
      'contribute/engage'
    ],
  },
  {
    type: 'category',
    label: 'Contribute code',
    collapsed: true,
    items: [
      'contribute/getting-started-code',
      'contribute/github-workflow'
    ],
  },
  {
    type: 'category',
    label: 'Contribute docs',
    collapsed: true,
    items: [
      'contribute/test'
    ],
  }
]


module.exports = {
  guides,
  reference,
  contribute
}
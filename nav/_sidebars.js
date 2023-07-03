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
    label: 'Components',
    collapsed: true,
    items: [
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

const api = [
  {
    type: 'doc',
    id: 'api/index'
  },
  {
    type: 'doc',
    id: 'api/customer-os-api'
  },
  {
    type: 'doc',
    id: 'api/domain-scraper'
  },
  {
    type: 'doc',
    id: 'api/email-validation'
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
]

module.exports = {
  guides,
  api,
  contribute
}

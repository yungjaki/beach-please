import type { CollectionConfig } from 'payload'

export const Schedule: CollectionConfig = {
  slug: 'schedule',
  fields: [
    {
      name: 'artist',
      type: 'relationship',
      relationTo: 'artists',
    },
    { name: 'day', type: 'text' },
    { name: 'stage', type: 'text' },
    { name: 'time', type: 'text' },
  ],
}

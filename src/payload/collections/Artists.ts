import type { CollectionConfig } from 'payload'

export const Artists: CollectionConfig = {
  slug: 'artists',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true },
    { name: 'visible', type: 'checkbox', defaultValue: true }
  ],
}

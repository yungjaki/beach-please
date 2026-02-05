import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'

import { Users } from './collections/Users'
import { Artists } from './collections/Artists'
import { Schedule } from './collections/Schedule'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET as string,

  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string,
  }),

  admin: {
    user: 'users',
  },

  collections: [Users, Artists, Schedule],
})

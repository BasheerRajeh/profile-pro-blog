// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-imports
import NextAuth from 'next-auth'

declare module 'next-auth' {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Session {
        user: {
            id: string
            // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
        } & DefaultSession['user']
    }
}

declare module 'objectid'

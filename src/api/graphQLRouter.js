import { makeExecutableSchema } from 'graphql-tools'
import { userType, userResolvers } from './resources/user'
import { songType } from './resources/song'
import { playlistType } from './resources/playlist'
import merge from 'lodash.merge'
import { graphqlExpress } from 'apollo-server-express'

const baseSchema = `{
    schema {
        query: Query
    }
}`

const schema = makeExecutableSchema({
  typeDefs: [baseSchema, songType, playlistType, userType],
  resolvers: merge({}, userResolvers)
})

export const graphQLrouter = graphqlExpress(req => ({
  schema,
  context: {
    req,
    user: req.user
  }
}))

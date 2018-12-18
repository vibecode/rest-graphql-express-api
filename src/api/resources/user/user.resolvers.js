import { User } from './user.model'
import merge from 'lodash.merge'

const getMe = (_, __, { user }) => {
  return user
}

const updateMe = (_, { input }, { user }) => {
  merge(user, input)
  return user.save()
}

const playlists = () => {
  return Playlist.find({}).exec()
}

export const userResolvers = {
  Query: {
    getMe
  },

  Mutation: {
    updateMe
  },

  User: {
    playlists
  }
}

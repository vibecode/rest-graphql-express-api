import { Playlist } from './playlist.model'
import { mergeSchemas } from 'graphql-tools'

const getPlaylist = (_, { id }) => {
  return Playlist.findById(id).exec()
}

const allPlaylists = () => {
  return Playlist.find({}).exec()
}

const newPlaylist = (_, { input }) => {
  return Playlist.create(input)
}

const updatePlaylist = (_, { input }) => {
  const { id, ...update } = input

  return Playlist.findByIdAndUpdate(id, update, { new: true }).exec()
}

const songs = async playlist => {
  const populated = await playlist

  populated.populate('songs').execPopulate()

  return populated.songs
}

export const playlistResolvers = {
  Query: {
    allPlaylists,
    Playlist: getPlaylist
  },

  Mutation: {
    newPlaylist,
    updatePlaylist
  },

  Playlist: {
    songs
  }
}

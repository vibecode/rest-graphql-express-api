import { Song } from './song.model'

const getSong = (_, { id }, { user }) => {
  return Song.findById(id).exec()
}

const allSongs = () => {
  Song.find({}).exec()
}

export const songResolvers = {
  Query: {
    allSongs,
    Song: getSong
  }
}

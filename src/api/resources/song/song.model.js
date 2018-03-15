import mongoose from 'mongoose'

export const schema = {
  title: {
    type: String,
    unique: true,
    required: [true, 'A song should have a title']
  },
  url: {
    type: String,
    unique: true,
    required: [true, 'A song should have an url']
  },
  album: String,
  artist: String,
  rating: {
    type: Number
  },
  favorite: {
    type: Boolean
  }
}

const songSchema = new mongoose.Schema(schema)

songSchema.pre('validate', () => {

})

export const Song = mongoose.model('song', songSchema)

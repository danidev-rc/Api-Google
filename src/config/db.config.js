import mongoose from 'mongoose'
import { Envconfig } from './env.config.js'

const { mongoUri } = Envconfig()

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri)
    console.log('MongoDB connected')
  } catch (error) {
    console.error(error)
  }
}

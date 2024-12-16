import dotenv from 'dotenv'

dotenv.config()

const {
  PORT: port,
  NODE_ENV: environment,
  MONGO_URI: mongoUri,
  JWT_SECRET: jwtSecret,
  CORS_ORIGIN: corsOrigin,
  GOOGLE_CLIENT_ID: googleClientId,
  GOOGLE_CLIENT_SECRET: googleClientSecret
} = process.env

export const Envconfig = () => ({
  port,
  environment,
  mongoUri,
  jwtSecret,
  corsOrigin,
  googleClientId,
  googleClientSecret
})

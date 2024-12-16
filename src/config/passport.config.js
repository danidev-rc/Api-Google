import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Envconfig } from './env.config.js'
import { User } from '../models/user.model.js'

const { googleClientId, googleClientSecret } = Envconfig()

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id })
        if (existingUser) {
          return done(null, existingUser)
        }
        const newUser = new User({
          googleId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value,
          image: profile.photos[0].value
        })
        await newUser.save()
        done(null, newUser)
      } catch (error) {
        done(error, false)
      }
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user)
  })
})

export default passport

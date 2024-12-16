import passport from 'passport'

export const googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email']
})

export const googleAuthCallback = passport.authenticate('google', {
  failureRedirect: '/login',
  successRedirect: '/'
})

export const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err)
    }
    res.redirect('/')
  })
}

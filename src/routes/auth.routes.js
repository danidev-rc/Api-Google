import { Router } from 'express'
import { googleAuth, googleAuthCallback, logout } from '../controllers/auth.controller.js'

const router = Router()

router.get('/google', googleAuth)
router.get('/google/callback', googleAuthCallback)
router.get('/logout', logout)

export default router

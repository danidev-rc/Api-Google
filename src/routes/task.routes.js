import { Router } from 'express'
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/task.controller.js'
import { ensureAuthenticated } from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/tasks', ensureAuthenticated, createTask)
router.get('/tasks', ensureAuthenticated, getTasks)
router.put('/tasks/:id', ensureAuthenticated, updateTask)
router.delete('/tasks/:id', ensureAuthenticated, deleteTask)

export default router

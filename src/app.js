import morgan from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import passport from './config/passport.config.js'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import { Envconfig } from './config/env.config.js'

const { jwtSecret } = Envconfig()

const app = express()

// Middleware para parsear cookies
app.use(cookieParser())

// Uso de JSON
app.use(express.json())

// Uso de Morgan
app.use(morgan('dev'))

// Inicializar Passport
app.use(passport.initialize())

// Configurar sesiones
app.use(session({
  secret: jwtSecret,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

// Inicializar Passport
app.use(passport.initialize())
app.use(passport.session())

// Rutas
app.use('/auth', authRoutes)
app.use('/api', taskRoutes)

export default app

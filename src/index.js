import app from './app.js'
import { Envconfig } from './config/env.config.js'
import { connectDB } from './config/db.config.js'

const { port } = Envconfig()

connectDB()

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

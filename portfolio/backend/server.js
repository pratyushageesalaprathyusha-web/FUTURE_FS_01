import dns from 'dns'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import { connectDB } from './config/db.js'
import contactRoutes from './routes/contactRoutes.js'
import { notFound, errorHandler } from './middleware/errorHandler.js'

dotenv.config()

dns.setServers(['8.8.8.8', '1.1.1.1'])

const app = express()

// Core middleware
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))

// CORS
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  })
)

// Rate limit the contact endpoint to prevent abuse
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: 'Too many requests. Please try again later.' }
})
app.use('/api/contact', contactLimiter)

// Routes
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Portfolio API is running' })
})
app.use('/api/contact', contactRoutes)

// Error handling
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

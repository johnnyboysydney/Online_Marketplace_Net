// Dependencies
import express from 'express'
import path from 'path'
import cookieParser from 'cookieParser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

// modules for server side rendering


// end
const CURRENT_WORKING_DIR = process.cwd()
const app = express()

// parse body params and attache them to req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(cookieParser()) //Cookie parsing middleware to parse and set cookies in request objects.
app.use(compress())

// secure apps by setting various HTTP headers


// enable CORS - Cross Origin Resource Sharing


// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)

// Catch unauthorised errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }
  })
  
  export default app
  
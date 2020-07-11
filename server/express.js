// Dependencies
import express from 'express'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import userRoutes from './routes/user.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

// mount routes
app.use('/', userRoutes)

app.get('/', (req, res) => {
    res.status(200).send(Template())
    })

export default app

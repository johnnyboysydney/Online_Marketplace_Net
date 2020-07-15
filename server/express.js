// Dependencies
import express from 'express'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import path from 'path'
import helmet from 'helmet'
import Template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

// modules for server side rendering
//import React from 'react'
//import ReactDOMServer from 'react-dom/server'
//import MainRouter from './../client/MainRouter'
//import StaticRouter from 'react-router-dom/StaticRouter'
//import { SheetsRegistry } from 'react-jss/lib/jss'
//import JssProvider from 'react-jss/lib/JssProvider'
//import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles'
//import { indigo, pink } from 'material-ui/colors'
//end

//comment out before building for production
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

//comment out before building for production
devBundle.compile(app)

// parse body params and attach them to req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)

app.get('/', (req, res) => {
    res.status(200).send(Template())
    })

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({"error" : err.name + ": " + err.message })
    } else if (err) {
        res.status(400).json({"error": err.name + ": " + err.message })
    }
})

export default app;

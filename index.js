import express from 'express'
import dotenv from 'dotenv'
import router from './src/routes/index.router.js'
import errorController from './src/controller/error/error.controller.js'
dotenv.config()
const { HTTP_PORT } = process.env

const api = express()
api.use(express.json())
api.use(router)
api.use(errorController)
api.listen(HTTP_PORT, () => {
  console.log(`Listen on port http://localhost:${HTTP_PORT}`)
})

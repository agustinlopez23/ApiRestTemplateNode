import express from 'express'
import { create } from '../controller/user/index.controller.js'
const router = express.Router()

router.post('/create', create)
export default router

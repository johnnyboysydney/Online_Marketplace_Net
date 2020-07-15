import express from 'express'
import orderCtrl from '../controllers/order.controller'
import productCtrl from '../controllers/product.controller'
import authCtrl from '../controllers/auth.controller'
import shopCtrl from '../controllers/shop.controller'
import userCtrl from '../controllers/user.controller'

const router = express.Router()

export default router
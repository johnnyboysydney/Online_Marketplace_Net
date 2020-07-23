import express from 'express'
import productCtrl from '../controllers/product.controller'
import authCtrl from '../controllers/auth.controller'
import shopCtrl from '../controllers/shop.controller'

const router = express.Router()

router.route('/api/products/by/:shopId')
  .post(authCtrl.requireSignin, shopCtrl.isOwner, productCtrl.create)
  .get(productCtrl.listByShop)


router.route('/api/products/latest')
    .get(productCtrl.listLatest)

router.route('/api/products/related/:productId')
    .get(productCtrl.listRelated)
  
router.route('/api/products/categories')
    .get(productCtrl.listCategories)

export default router
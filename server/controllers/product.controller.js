import Product from '../models/product.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'
import profileImage from './../../client/assets/images/profile-pic.png'

const create = (req, res, next) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          message: "Image could not be uploaded"
        })
      }
      let product = new Product(fields)
      product.shop= req.shop
      if(files.image){
        product.image.data = fs.readFileSync(files.image.path)
        product.image.contentType = files.image.type
      }
      product.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.json(result)
      })
    })
}

const productByID = () => {
  Product.findById(id).populate('shop', '_id name').exec((err, product) => {
    if (err || !product)
      return res.status('400').json({
        error: "Product not found"
      })
    req.product = product
    next()
  })
}

const photo = () => {

}

const defaultPhoto = () => {

}

const read = (req, res) => {
    req.product.image = undefined
    return res.json(req.product)
}

const update = () => {

}

const remove = () => {

}

const listByShop = () => {

}

const listLatest = () => {

}

const listRelated = () => {

}

const listCategories = () => {

}

const list = () => {

}

const decreaseQuantity = () => {

}

const increaseQuantity = () => {

}

export default {
    create,
    productByID,
    photo,
    defaultPhoto,
    read,
    update,
    remove,
    listByShop,
    listLatest,
    listRelated,
    listCategories,
    list,
    decreaseQuantity,
    increaseQuantity
}
// I will be creating similar functions as in product.controller:
// create, photo, defaultphoto, read, update, remove, listbyseller
// And will create new ones for the auction:
// auctionbyID, listbybidder.
import Auction from '../models/auction.model'
import extend from 'lodash/extend'
import errorHandler from '../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'
import defaultImage from './../../client/assets/images/default.png'



const create = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(400).json({
        message: "Image could not be uploaded"
      })
    }
    let auction = new Auction(fields)
    auction.seller= req.profile
    if(files.image){
      auction.image.data = fs.readFileSync(files.image.path)
      auction.image.contentType = files.image.type
    }
    try {
      let result = await auction.save()
      res.status(200).json(result)
    }catch (err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  })
}

const auctionByID = async (req, res, next, id) => {
  try {
    let auction = await Auction.findById(id).populate('seller', '_id name').populate('bids.bidder', '_id name').exec()
    if (!auction)
      return res.status('400').json({
        error: "Auction not found"
      })
    req.auction = auction
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve auction"
    })
  }
}

const photo = () => {}
const defaultPhoto = () => {}
const read = () => {}
const update = () => {}
const remove = () => {}
const listOpen = () => {}
const listBySeller = () => {}
const listByBidder = () => {}
const isSeller = () => {}

export default {
  create,
  auctionByID,
  photo,
  defaultPhoto,
  listOpen,
  listBySeller,
  listByBidder,
  read,
  update,
  isSeller,
  remove
}




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



const create = () => {}
const auctionByID  = () => {}
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




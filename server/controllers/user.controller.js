// Dependencies 
import User from '../models/user.model'
import extend from 'lodash/extend'
import errorHandler from './error.controller'

const create = (req, res, next) => {
    const user = new User(req.body)
    user.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.status(200).json({
        message: "Successfully signed up!"
      })
    })
}

const list = (req, res) => {
    User.find((err, users) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(users)
    }).select('name email updated created')
}

const userByID = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
      if (err || !user)
        return res.status('400').json({
          error: "User not found"
        })
      req.profile = user
      next()
    })
  }

const read = (req, res) => { … }

const update = (req, res, next) => { … }

const remove = (req, res, next) => { … }

export default { create, userByID, read, list, remove, update }
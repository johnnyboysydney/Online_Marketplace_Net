// Dependencies 
import User from '../models/user.model'
import extend from 'lodash/extend'
import errorHandler from './error.controller'

const create = async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        return res.status(200).json({
            message: "Successfully signed up!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

// Load user and append to the req
const list = async (req, res) => {
    try {
        let users = await User.find().select('name email updated created')
        res.json(users)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const userByID = async (req, res, next, id) => {
    try {
        let user = await User.findById(id)
        if (!user)
        return res.status('400').json({
            error: "User not found"
        })
        req.profile = user
        next()
    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve user"
        })
    }
}

const read = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

// updating a single user
const update = async (req, res) => {
    try {
        let user = req.profile
        user = extended(user, req.body)
        await user.save()
        user.hashed_password = undefined
        user.salt = undefined
        res.json(user)
    } catch {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = (req, res, next) => { … }

export default { create, userByID, read, list, remove, update }
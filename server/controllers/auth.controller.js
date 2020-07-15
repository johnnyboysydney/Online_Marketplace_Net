import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'

const jwtExpirySeconds = 300;

const signin = async (req, res) => {
    try {
        let user = await User.findOne({ "email": req.body.email })
        if (!user)
            return res.status('401').json({ error: "User not found" })
        if (!user.authenticate(req.body.password)){
            return res.status('401').send({ error: "Email and password don't match" })
        }
        // Create a new token with the username in the payload
	    // and which expires 300 seconds after issue
        const token = jwt.sign({ _id: user._id }, config.jwtSecret)

        res.cookie('t', token, { expire: new Date() + 9999 })
        
        return res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })    
    } catch (err){
        return res.status('401').json({ error: "Could not sign in" })
    }
}

const signout = (req, res) => {
    res.clearCookie('token')
    return res.status('200').json({
        message: "Signed out"
    })
}

const requireSignin = expressJwt({ 
    secret: config.jwtSecret,
    //userProperty: 'auth',
    algorithm: ["HS256"],
    //expiresIn: jwtExpirySeconds,
})

const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.authenticate
        && req.profile._id == req.auth._id
    if (!(authorized)) {
        return res.status('403').json({
            error: "User is not authorized"
        })
    }
    next()
}

export default { signin, signout, requireSignin, hasAuthorization };
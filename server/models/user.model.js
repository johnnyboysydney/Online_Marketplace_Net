import mongoose from 'mongoose'
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({
    // The name field is a required field of the String type
    name: {
      type: String,
      trim: true,
      required: 'Name is required'
    },
    // The email field is a required field of the String type
    email: {
      type: String,
      trim: true,
      unique: 'Email already exists',
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
      required: 'Email is required'
    },
    // The hashed_password and salt fields represent the encrypted user password
    hashed_password: {
      type: String,
      required: "Password is required"
    },
    salt: String,
    updated: Date,
    // The created and updated fields are Date values.
    created: {
      type: Date,
      default: Date.now
    }
})

// The password string that's provided by the user it is handled as a virtual field.
UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function() {
    return this._password
  })

// Password field validation
UserSchema.path('hashed_password').validate(function(v) {
  if (this._password && this._password.length < 6) {
    this.invalidate('password', 'Password must be at least 6 characters.')
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required')
  }
}, null)

// The encryption logic and salt generation logic,
UserSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },
  encryptPassword: function(password) {
    if (!password) return ''
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex')
    } catch (err) {
      return ''
    }
  },
  makeSalt: function() {
    return Math.round((new Date().valueOf() * Math.random())) + ''
  }
}



export default mongoose.model('User', UserSchema)
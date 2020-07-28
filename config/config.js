import dotenv from 'dotenv'

require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
    stripe_connect_test_client_id: process.env.STRIPE_CLIENT_ID,
    stripe_test_secret_key: process.env.STRIPE_SECRET_KEY,
    stripe_test_api_key: process.env.STRIPE_API_KEY
}

export default config

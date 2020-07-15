const dotenv = require("dotenv");

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    //The secret key to be used to sign JWT
    jwtSecret: process.env.TOKEN_SECRET || TOKEN_SECRET,   
     //The location of the MongoDB database
    mongoUri: process.env.MONGODB_URI ||                                      
    process.env.MONGO_HOST ||                  
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') + '/mernproject'
}

export default config;
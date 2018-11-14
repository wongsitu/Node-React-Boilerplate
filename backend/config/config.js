require('dotenv').config()

module.exports = {  
    jwtSecret: process.env.jwtSecret,
    jwtSession: {
        session: false
    },
    'url' : 'mongodb://mongo:27017' 
}
const mongoose = require('../db/connection')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
		unique: true 
    },
    username: {
        type: String,
        required: true,
        unique: true
	},
    password: {
        type: String, 
        required: true
	},
})

mongoose.model('User', UserSchema)

module.exports = mongoose
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
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    password: {
        type: String, 
        required: true
	},
})

mongoose.model('User', UserSchema)

module.exports = mongoose
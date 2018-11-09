const mongoose = require('../db/connection')

const CommentSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    content: { 
        type: String 
    },
    votes: {
        type: Number
    },
    replies: [this]
})

mongoose.model('Comment', CommentSchema)

module.exports = mongoose
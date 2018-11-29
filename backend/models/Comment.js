const mongoose = require('../db/connection'),
    Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    content: { 
        type: String,
        required: true, 
    },
    votes: {
        type: Number,
        default: 0,
    },
    replies: [this]
})

mongoose.model('Comment', CommentSchema)

module.exports = mongoose
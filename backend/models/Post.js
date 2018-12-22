const mongoose = require('../db/connection'),
    Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true, 
    },
    content: {
        type: String,
        required: true, 
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    },
    date: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('Post', PostSchema)

module.exports = mongoose
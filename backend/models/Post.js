const mongoose = require('../db/connection'),
    Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    content: {
        type: String,
        required: true, 
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }
})

mongoose.model('Post', PostSchema)

module.exports = mongoose
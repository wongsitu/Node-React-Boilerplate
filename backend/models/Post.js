const mongoose = require('../db/connection')

const PostSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    content: { 
        type: String 
    },
})

mongoose.model('Post', PostSchema)

module.exports = mongoose
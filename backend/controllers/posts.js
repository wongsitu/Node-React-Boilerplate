const express = require('express')
const router = express.Router()

const mongoose = require('../models/Post')
const Post = mongoose.model('Post')

// /api/posts/  => Posts Index
router.get('/', (req, res) => {
    Post.find({})
        .then(posts => res.json(posts))
})

module.exports = router
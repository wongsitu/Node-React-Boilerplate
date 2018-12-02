const express = require('express')
const router = express.Router()

const mongoose = require('../models/Post')
const Post = mongoose.model('Post')

// /posts/  => Posts Index
router.get('/', (req, res) => {
    Post.find({})
        .populate("user")
        .populate("comments")
        .then(posts => res.json(posts))
})

// posts/:id => Post show one
router.get('/:id',(req,res) => {
    let postId = req.params.id
    Post.find({_id:postId})
    .populate("user")
    .populate("comments")
    .then(post => res.json(post))
})

// /posts/new  => Posts Index
router.post('/new', (req, res) => {
    let newPost = req.body
    Post.create(newPost,(err,savedPost)=>{
        if(err){ 
            return res.status(400).json({err: "error has occured"})
        }; 
        res.json({data:savedPost})
    })
})

// posts/:id => Post delete
router.delete('/:id',(req,res) => {
    let postId = req.params.id
    Post.deleteOne({ _id: postId }, (err, deletedPost) => {
        if(err){ return res.status(400).json({err: "error has occured"})}
        res.json({data:deletedPost});
    });
})

module.exports = router
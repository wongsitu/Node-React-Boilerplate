const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const config = require('../config/config')

const mongoose = require('../models/Post')
const Post = mongoose.model('Post')
const User = mongoose.model('User')
const verifyToken = require('./middleware')

// /posts/  => Posts Index
router.get('/',verifyToken, (req, res) => {
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
router.post('/new',verifyToken, (req, res) => {
    let userId = jwt.decode(req.token, config.jwtSecret)
    User.find({_id:userId.id}).then((user)=>{
        let newPost = {
            user: user[0],
            content: req.body.content,
        }
        Post.create(newPost,(err,savedPost) => {
            console.log(newPost)
            if(err){
                return res.status(400).json({err: "error has occured"})
            };
            res.json(savedPost)
        })
    })
})

// posts/:id => Post delete
router.delete('/:id',verifyToken,(req,res) => {
    let userId = jwt.decode(req.token, config.jwtSecret)
    let postId = req.params.id
    Post.find({_id:postId}, (err,post) => {
        if(userId.id == post[0].user){
            Post.deleteOne({ _id: postId }, (err, deletedPost) => {
                if(err){ 
                    return res.status(400).json({err: "error has occured"})
                }
                res.json({data:deletedPost});
            });
        } else {
            res.json(err)
        }
    })
})

module.exports = router
const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const config = require('../config/config')

const mongoose = require('../models/Post')
const Post = mongoose.model('Post')
const User = mongoose.model('User')

function verifyToken(req, res, next) {
    console.log("in verify...");
    // Get auth header value
    // when we send our token, we want to send it in our header
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader)
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

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
    let postId = req.params.id
    Post.deleteOne({ _id: postId }, (err, deletedPost) => {
        if(err){ 
            return res.status(400).json({err: "error has occured"})
        }
        res.json({data:deletedPost});
    });
})

module.exports = router
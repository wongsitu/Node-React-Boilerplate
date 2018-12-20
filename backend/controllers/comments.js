const express = require('express')
const router = express.Router()

const mongoose = require('../models/Comment')
const jwt = require('jwt-simple')
const config = require('../config/config')

const User = mongoose.model('User')
const Comment = mongoose.model('Comment')
const verifyToken = require('./middleware')

// /comments/ => All comments
router.get('/',(req,res)=>{
    Comment.find({})
        .populate("user")
        .populate("votes")
        .populate("replies")
        .then(comments => res.json(comments))
})

// /comments/:id => Show one comment
router.get('/:id',(req,res) => {
    let commentId = req.params.id
    Comment.find({_id:commentId})
        .populate("user")
        .populate("votes")
        .populate("replies")
        .then(comment => res.json(comment))
})

// /comments/new => Create new comment
router.post('/new',verifyToken, (req, res) => {
    let userId = jwt.decode(req.token, config.jwtSecret)
    User.find({_id:userId.id}).then((user)=>{
        let newComment = {
            user: user[0],
            content: req.body.content,
        }
        Comment.create(newComment,(err,savedComment) => {
            console.log(newComment)
            if(err){
                return res.status(400).json({err: "error has occured"})
            };
            res.json(savedComment)
        })
    })
})

module.exports = router
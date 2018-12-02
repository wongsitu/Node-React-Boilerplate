const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/react-node-boiler', { useNewUrlParser: true } )

const User = require('./User')
const Post = require('./Post')
const Comment = require('./Comment')

//this will make Todo available to anyone who requires index.js
module.exports ={
    User: User,
    Post: Post,
    Comment: Comment,
}
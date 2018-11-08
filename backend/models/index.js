const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/react-node-boiler', { useNewUrlParser: true } )

const User = require('./User')

//this will make Todo available to anyone who requires index.js
module.exports ={
    User: User
}